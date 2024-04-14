import { ApifyDatasetLoader } from "langchain/document_loaders/web/apify_dataset";
import { Document } from "langchain/document";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAI } from 'langchain/lms/openai';

import { CharacterTextSplitter } from "langchain/text_splitter";

// npm install langchain @langchain/openai @langchain/community -> may take a few min

const getSplitter = ():CharacterTextSplitter => {
  return new CharacterTextSplitter({
    separator: " ",
    chunkSize: 100,
    chunkOverlap: 20,
  });
}


const getLoader = (datasetId: string): ApifyDatasetLoader<any> => {
  return new ApifyDatasetLoader(datasetId, {
    datasetMappingFunction: (item) =>
      new Document({
        pageContent: (item.text || "") as string,
        metadata: { source: item.url },
      }),
  });
}

const getChain = (vectorStore: HNSWLib): RetrievalQAChain => {
  return RetrievalQAChain.fromLLM(
    new OpenAI({
      temperature: 0.2,
      modelName: 'gpt-3.5-turbo',
    }),
    vectorStore.asRetriever(5),
    {
      returnSourceDocuments: true,
    },
  );
}

const getAnswer = async (chain: RetrievalQAChain, input: string) => {
  try {
    const res = await chain.invoke({ query: input });

    console.log(res.text);
    console.log(res.sourceDocuments.map((doc: Document) => doc.metadata.source));
  } catch (e: unknown) {
    console.log(e);
    if (typeof e === 'object' && e !== null && 'response' in e) {
      const axiosError = e as { response: { data: { error: unknown } } };
      console.log(axiosError.response.data.error);
    }
  }
}
export const prepareDatasetObject = async (datasetId: string, updateChainObject: (cain: RetrievalQAChain | null) => void) => {
  try {
    console.log("Prepare DS ID...")
    const splitter = getSplitter();
    const loader = getLoader(datasetId);

    const docs = await splitter.splitDocuments(await loader.load());
    const vectorStore: HNSWLib = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

    const chain = getChain(vectorStore);
    console.log("chain created:", chain);
    updateChainObject(chain);
  } catch(e:unknown) {
    console.log("Error occurred...")
  }


}








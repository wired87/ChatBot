import React, {memo, useState} from "react";
import InputMap from "./InputMap";
import {ColorPicker, useColor} from "react-color-palette";
import InfoComponent from "../InfoComponent";
import axios from "axios/index";
import {useNavigate} from "react-router-dom";
import Lottie from "react-lottie";
import {defaultOptions} from "../../functions/lottie";
import errorLottie from "../../assets/annimations/errorLottie.json";
import successBotCreate from "../../assets/annimations/successBotCreate.json";
import {Button} from "@mui/material";
import LoadingIndicator from "../LoadingIndicator";
import {UserInterface} from "../../interfaces/userInterface";
import {Input, InputTypes, PostObject} from "../../interfaces/DashboardInterface";




const postUrl: string = "https://wired66.pythonanywhere.com/bot/create/";

const PRIMARY_TEXT_EXPLANATION: string =
  "The primary color will be used for user messages and the Bot's name in the Chat window heading";

const INPUT_FIELD_DATA: InputTypes[] = [
  {
    label: "Public Name",
    key: "pubName",
    placeholder: "Will be displayed to your customers",
  },
  {
    label: "Secret Name",
    key: "name",
    placeholder: "Alphabetic characters from a-z",
  },
  {
    label: "Welcome Message",
    key: "welcomeMessage",
    placeholder: "Hallo, wie kann ich Ihnen helfen?",
  },
  {
    label: "Your website url",
    key: "dataUrl",
    placeholder: "The url of your website ( landingpage )",
  },
  {
    label: "Description",
    key: "description",
    placeholder: "My cool new Bot",
  }
];

interface AdBotProps {
  user?: UserInterface | null;
  success: string;
  updateSuccess: (value: string) => void;
}

const AdBotContent: React.FC<AdBotProps> = (
  {
    user,
    updateSuccess,
    success
  }
) => {

  const [input, setInput] = useState<Input>(
    {
      name: "",
      description: "",
      dataUrl: "",
      pubName: "",
      welcomeMessage: ""
    }
  )

  const updateInput = (key: keyof Input) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prevInput => ({
      ...prevInput,
      [key]: e.target.value
    }));
  };

  const [color, setColor] = useColor("#561ecb");
  const [textColor, setTextColor] = useColor("#561ecb");



  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const resetInput = () => {
    setError("");
    setInputError("");
  }

  function replaceWhitespace(input: string): string {
    return input.replace(/\s+/g, '');
  }

  const getSenderObject = (): PostObject | string => {
    const { name, dataUrl, description, pubName, welcomeMessage } = input;
    if (!dataUrl.trim().startsWith("https")) {
      return "The given URL is not secure.";
    } else if ( dataUrl.length === 0 || description.length === 0 || name.length === 0 ) {
      return "All fields are required...";
    }
    return {
      user_id: user?.auth?.uid || "",
      model_id: replaceWhitespace(name),
      data_url: dataUrl.trim(),
      description: description,
      pubName: pubName,
      configData: {
        primary: color,
        primaryText: textColor,
        welcomeMessage: welcomeMessage,
      }
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ( user?.plan?.name && Number(user?.plan?.totalBotsIncluded) > 0 && /^[a-z]+$/.test(replaceWhitespace(input.name))) {
      await createBot();
    } else if (!/^[a-z]+$/.test(input.name)) {
      setInputError("The name of the Bot can only contain alphabetic characters from a-z")
    } else {
      setInputError("You dont have enough available Bots currently. Please upgrade your plan. ")
    }
  }

  const createBot = async () => {
    const uid = user?.auth?.uid;
    console.log("uid:", user?.auth?.uid)
    if ( uid && uid?.length > 0 ) {
      setLoading(true);

      // data preparation
      const senderObject: PostObject | string = getSenderObject();
      if ( typeof senderObject === 'string' ) {
        setInputError(senderObject);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(
          postUrl,
          senderObject
        );
        if (res.data?.status_code === 200) {
          console.log("Data:", res.data);
          resetInput()
          updateSuccess(res.data.bot_status);
        } else {
          console.log("Invalid request...")
          setError(res.data.message)
        }

      } catch ( e:unknown ) {
        if ( e instanceof Error ) {
          console.log("Something unexpected occurred:", e);
          setError("The connection was getting lost. Please try gian.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  };









  if ( error.length > 0 ) {
    return(
      <div className={"flex flex-col justify-center items-center w-full"}>
        <Lottie options={defaultOptions(errorLottie)} height={200} width={200} />
        <h4>{error}</h4>
      </div>
    )
  } else if ( success.length > 0 ) {
    return(
      <div className={"flex flex-col justify-center gap-3 items-center w-full"}>
        <Lottie options={defaultOptions(successBotCreate)} height={200} width={200} />
        <h4>That worked! Your current Bot staus is: {success}</h4>
        <h4>TWe will inform you about every status update!</h4>
        <Button className={"my-3"} onClick={() => window.location.reload()}>close</Button>
      </div>
    )
  } else if ( loading ) {
    return(
      <div className={"flex w-full h-full justify-center items-center pt-5 pb-8"}>
        <LoadingIndicator loading={loading} />
      </div>)
  }
  return(
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-start items-start w-full"
      action="#"
      method="POST"
    >
      <div className="gap-4 w-full px-5 ">

        <h4 style={{opacity: .8}}>General Data </h4>
        <InputMap updateInput={updateInput} inputMapArray={INPUT_FIELD_DATA} />

        <h4 style={{opacity: .8}}>Design </h4>
        <p style={{opacity: .8}}>( can be changed at any time )</p>
        <div className="mt-2 w-full flex items-center justify-center">
          <label
            className="block text-md text-gray-600"
            htmlFor="name">
            Primary color
          </label>
          <ColorPicker color={color} onChange={setColor} />
          <InfoComponent text={PRIMARY_TEXT_EXPLANATION} />
        </div>

        <div className="mt-2 w-full flex items-center justify-center">
          <label
            className="block text-md text-gray-600"
            htmlFor="name">
            Primary text color
          </label>
          <ColorPicker color={textColor} onChange={setTextColor} />
          <InfoComponent text={PRIMARY_TEXT_EXPLANATION} />
        </div>
      </div>

      <div className={"text-center w-full"}>
        <h4 className={"color-main-secondary"}>{inputError}</h4>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          className="cursor-pointer inline-flex w-full justify-center rounded-md bg-indigo-600 px-3
            py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600" >
          Create a new bot
        </button>
      </div>
    </form>
  )
}

export default memo(AdBotContent);
import React, {memo, useEffect, useState} from "react";
import Modal from "./Modal";
import {BotData, UserInterface} from "../interfaces/userInterface";
import AddBot from "./AddBot";

interface BotsTable {
  bots: object[];
  user?: UserInterface
}

const BotsTable: React.FC<BotsTable> = (
  {
    bots,
    user
  }
) => {


  const [open, setOpen] = useState<boolean>(false);

  const [add, setAdd] = useState<boolean>(false);
  const updateAdd = () => setAdd(!add);

  const [selected, setSelected] = useState({});
  const [fieldError, setFieldError] = useState<string>("");

  const statusMessage = (status: string | undefined) => {
    return (
      <div
        className={
          status === "ACTIVE" ?
            "text-emerald-700 px-2 inline-flex py-1 rounded-md font-semibold bg-emerald-100 " :
            status === "IN_PROGRESS" ?
              "text-yellow-700 px-2 inline-flex py-1 rounded-md font-semibold bg-yellow-100" :
              status === "INACTIVE" ?
                "text-yellow-700 px-2 inline-flex py-1 rounded-md font-semibold bg-red-100" :
                ""
        }
      >
        {status || "UNKNOWN"}
      </div>
    );
  };

  const getUserBool = () => {
    return user?.plan?.name
  }




  useEffect(() => {
    if ( fieldError.length > 0 ) {
      const interval = setInterval(() => {
        setFieldError("");
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [fieldError])

  const handleAddClick = () => {
    if (getUserBool()) {
      updateAdd();
    } else {
      setFieldError("You have no active plan currently...");
    }
  }

  const filedErrorText = () => {
    if ( fieldError.length > 0 ) {
      return(
        <h5 className={"text-red"}>{fieldError}</h5>
      )
    }
  }

  return (
    <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <AddBot user={user} open={add} updateOpen={updateAdd} />
      <Modal selected={selected} open={open} setOpen={setOpen} />
      <div className="flex justify-between md:flex-row main_ flex-col  ">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Bots
          </h1>
        </div>
        <div className="flex flex-col">
          <button
            onClick={handleAddClick}
            className="px-5 py-2 cursor-pointer flex items-center gap-2  bg-indigo-600 rounded-md text-white" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new Bot
          </button>
          {
            filedErrorText()
          }
        </div>
      </div>

      <div className="mt-8 flow-root  border">
        <div className="    border-l border-green-500  overflow-x-auto  ">
          <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4   pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    <div className="px-3 py-1.5 w-full bg-slate-200 text-gray-400">
                      {" "}
                      Name
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    <div className="px-3 py-1.5 w-full bg-slate-200 text-gray-400">
                      {" "}
                      Status
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    <div className="px-3 py-1.5 w-full bg-slate-200 text-gray-400">
                      {" "}
                      Description
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    <div className="px-3 py-1.5 w-full bg-slate-200 text-gray-400">
                      {" "}
                      Details
                    </div>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bots.map((bot: BotData) => (
                  <tr key={bot.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {bot.name}
                    </td>
                    <td className="whitespace-nowrap   flex  px-3 py-4 text-sm text-gray-500">
                      {bot.status === "Success" ? (
                        <span className="px-2 py-1 text-xs  rounded-md bg-green-100 text-green-800">
                          {" "}
                          {statusMessage(bot.status)}
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {bot.description}
                    </td>
                    <td className="whitespace-nowrap flex items-center justify-between gap-2 px-3 py-4 text-sm text-gray-500">
                      {bot.dataUrl}
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setSelected(bot);
                          setOpen(!open);
                        }} >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(BotsTable);
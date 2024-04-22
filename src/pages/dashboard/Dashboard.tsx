import React, {memo, useCallback, useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";

import {
  BotData,
  PlanInterface,
  UserInterface,
} from "../../interfaces/userInterface";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../components/LoadingIndicator";
import BotsTable from "../../components/BotsTable";

const Dashboard = () => {

  const { user, saveUser, updateUser, checkUserAvailability } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  // todo if true systemerror modal pop up - refresh
  const [e, setE] = useState<string>("");

  const navigate = useNavigate();

  const setUserData = async (): Promise<void> => {
    setLoading(true);
    try {
      const localUser = checkUserAvailability();
      if (localUser && localUser.auth && localUser.auth.uid) {
        await getDashboard(localUser);
      } else {
        navigate("/login");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log("Error occurred:", e);
      }
    } finally {
      console.log("Finished...");
      setLoading(false);
    }
  };

  const getDashboard = async (localUser: UserInterface) => {
    let newUser = localUser;
    console.log("Current user:", newUser);

    try {
      const res = await axios.post(
        "https://wired66.pythonanywhere.com/dashboard/info/",
        {
          user_id: localUser?.auth?.uid,
        }
      );
      if (res.data?.status_code === 200) {
        console.log("Data:", res.data);
        console.log(res);

        const r = res.data;

        const botData: BotData[] = r.bots;

        const plan: PlanInterface = {
          name: r.plan.name,
          chatsLeft: r.chatsLeft,
          totalBotsIncluded: r.totalBotsIncluded,
        };

        newUser = {
          plan: plan,
          bots: botData,
        };

        console.log("Received user data:", newUser);
        updateUser(newUser);
        saveUser(newUser);

      } else {
        console.log("Invalid request...")
        setE(res.data.message)
      }

    } catch ( e:unknown ) {
      if ( e instanceof Error ) {
        console.log("Something unexpected occurred:", e);
        setE("The connection was getting lost. Please try gian.");
      }
    } finally {
      setLoading(false);
    }
  };

  const botTableContent = useCallback(() => {
    if ( user?.auth?.uid ) {
      return(
        <BotsTable bots={user?.bots || []} uid={user?.auth?.uid} />
      )
    }
    return(
      <div className="px-4 max-w-7xl mx-auto flex jusitfy-center items-center sm:px-6 lg:px-8">
        <LoadingIndicator loading={true} />
      </div>
    )
  }, [user, user?.auth?.uid]);


  useEffect(() => {
    setUserData()
      .then(() => {
        console.log("User set...");
      })
      .catch((e) => {
        console.log("Error occurred:", e);
      });
  }, []);

  const loadingContent = () => {
    if (loading) {
      return (
        <div
          className={
            "w-[100%] h-[100%] flex flex-1 flex-grow position-absolute justify-center items-center opacity-40 bg-gray-100"
          }
        >
          <LoadingIndicator size={50} color={"white"} loading={loading} />
        </div>
      );
    }
  };

  return (
    <Sidebar>
      <div className=" grid grid-cols-2 max-w-7xl mx-auto   gap-4 w-full mb-12 bg-white">
        <div className="px-6 shadow-sm flex bg-slate-300  flex-col py-4 rounded-lg text-gray-800">
          <div className="text-2xl font-semibold text-gray-900">
            Muhammad Kashif
          </div>
          {loadingContent()}
          <div className="text-sm">kashif@mail.com</div>
          <div className="text-sm">+92 3095203945</div>
          <div className="text-sm">Alia Town Baghbanpura Lahore Pakistan</div>
        </div>
        <div className="px-6 shadow-sm flex bg-slate-300  flex-col py-4 rounded-lg text-gray-800">
          <div className="text-2xl font-semibold text-gray-900">
            Muhammad Kashif
          </div>
          {loadingContent()}
          <div className="text-sm">kashif@mail.com</div>
          <div className="text-sm">+92 3095203945</div>
          <div className="text-sm">Alia Town Baghbanpura Lahore Pakistan</div>
        </div>
      </div>
      <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        {
          botTableContent()
        }
      </div>
    </Sidebar>
  );
};

export default memo(Dashboard);

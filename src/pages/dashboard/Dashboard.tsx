import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useUser } from "../../hooks/useUser";

import {
  BotData,
  PlanInterface,
  UserInterface,
} from "../../interfaces/userInterface";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {authActions} from "../../functions/redux/app/slices/authSlice";
import sub from "../../assets/annimations/sub.json";
import Lottie from "react-lottie";
import {defaultOptions} from "../../functions/lottie";
import {Button} from "@mui/material";
import BotsTable from "../../components/BotsTable";

const Dashboard = () => {

  const { user, saveUser, updateUser, checkUserAvailability } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("");

  // todo if true systemerror modal pop up - refresh
  const [e, setE] = useState<string>("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setUserData()
      .then(() => {
        console.log("User set...");
      })
      .catch((e) => {
        console.log("Error occurred:", e);
      });
  }, []);

  const setUserData = async (): Promise<void> => {
    setLoading(true);

    try {
      const localUser = checkUserAvailability();
      const uid = localUser?.auth?.uid
      if ( localUser && localUser.auth && uid && uid.length > 0 ) {
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
    console.log("Current user:", localUser);

    try {
      const res = await axios.post(
        "https://wired66.pythonanywhere.com/dashboard/info/",
        {
          user_id: localUser?.auth?.uid,
        }
      );
      if (res.data?.status_code === 200) {
        console.log("Data:", res.data);
        const r = res.data.userData;
        console.log("User data:", r);

        const botData: BotData[] | undefined | null = r.bots;
        if ( botData ) {
          localUser.bots = botData
        }
        const plan: PlanInterface | undefined | null = r.plan;
        if ( plan ) {
          localUser.plan = plan
        }

        console.log("Received user data:", localUser);
        updateUser(localUser);
        saveUser(localUser);
        setUid(localUser?.auth?.uid || "");
        dispatch(authActions.Login({ user: localUser }));

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
    console.log("uid:", uid);
    return(
      <BotsTable bots={user?.bots || []} user={user} loading={loading} />
    )
  }, [user, loading]);

  const planCard = (  ) => {
    if ( user?.plan ) {
      return(
        <div className="px-6 justify-between flex flex-row items-center shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500
         py-4 rounded-lg text-gray-800">
          <div >
            <div className="text-5xl font-semibold text-white text-bold">
              {user?.plan.name}
            </div>
            <div className="text-2xl text-white">Type: { user?.plan.type }</div>
            <div className="text-2xl text-white">Chats remaining: { user?.plan.chatsLeft }</div>
            <div className="text-2xl text-white">Total Bots: { user?.plan.totalBotsIncluded }</div>
          </div>
          <div >
            <Lottie options={defaultOptions(sub)} height={100} width={100} />
          </div>
        </div>
      )
    }
    return( // Get plan ad cards
      <div className="px-6 justify-between flex flex-row items-center shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500
         py-4 rounded-lg text-gray-800">
        <div >
          <div className="text-5xl font-semibold text-white text-bold">
            No active Plan currently . . .
          </div>
          <div className="text-2xl mt-4 mb-2 text-white">Upgrade to an Plan to explore our features!</div>
        </div>
        <div className={"flex h-full items-end justify-center"}>
          <Button onClick={() => navigate("/pricing")} className={"text-white"}>Upgrade!</Button>
        </div>
      </div>
    )
  }

  return (
    <Sidebar>
      <div className=" grid grid-cols-2 max-w-7xl mx-auto   gap-4 w-full mb-12 bg-white">
        {
          planCard()
        }
      </div>
      <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        {
          botTableContent()
        }
      </div>
    </Sidebar>
  );
};

export default Dashboard;

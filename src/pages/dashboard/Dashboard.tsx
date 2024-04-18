import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import {useUser} from "../../hooks/useUser";
import {BotData, PlanInterface, UserInterface} from "../../interfaces/userInterface";
import {useNavigate} from "react-router-dom";
import Bots from "../../components/BotsTable";

const Dashboard = () => {
  const {user, saveUser, updateUser, checkUserAvailability} = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  // todo if true systemerror modal pop up - refresh
  const [e, setE] = useState<boolean>(false);


  const navigate = useNavigate();

  const setUserData = async (): Promise<void> => {
    setLoading(true);
    try {
      const localUser = await checkUserAvailability();
      if ( localUser && localUser.auth && localUser.auth.uid ) {
        await getDashboard(localUser?.auth?.uid, localUser)
      } else {
        navigate("/login")
      }
    } catch(e:unknown) {
      if ( e instanceof Error) {
        console.log("Error occurred:", e)
      }
    } finally {
      console.log("Finished...")
      setLoading(false);
    }
  }



  const getDashboard = async (id: string, localUser: UserInterface) => {
    let newUser = localUser;
    console.log("Current user:", newUser);

    try {
      const res = await axios.post(
        "http://wired66.pythonanywhere.com/dashboard/info/",
        {
          user_id: id,
        }
      );
      console.log(res);

      const r = res.data

      const botData: BotData[] = r.bots

      const plan: PlanInterface = {
        name: r.plan.name,
        chatsLeft: r.chatsLeft,
        totalBotsIncluded: r.totalBotsIncluded
      }

      newUser = {
        plan: plan,
        bots: botData
      }

      console.log("Received user data:", newUser)
      updateUser(newUser);
      await saveUser(newUser);


    } catch (err) {
      console.log(err);
      setE(true);
    }
  };


  useEffect(() => {
    setUserData()
      .then(() => {
        console.log("User set...")
      }).catch(e => {
      console.log("Error occurred. . .")
    })
  }, []);


  return (
    <Sidebar>
      <div className="  grid grid-cols-2 lg:grid-cols-3 gap-4 w-full  mb-12">
        <div className="px-6 shadow-sm flex bg-gray-100  flex-col py-4 rounded-lg text-gray-800">
          <div className="text-2xl font-semibold text-gray-900">
            Muhammad Kashif
          </div>
          <div className="text-sm">kashif@mail.com</div>
          <div className="text-sm">+92 3095203945</div>
          <div className="text-sm">Alia Town Baghbanpura Lahore Pakistan</div>
        </div>
      </div>
      <Bots bots={user?.bots || []} />
    </Sidebar>
  );
};

export default memo(Dashboard);
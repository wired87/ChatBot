import {useState} from "react";
import {UserInterface} from "../interfaces/userInterface";

export const useUser = () => {
  const [user, setUser] = useState<UserInterface | null>(null)

  const updateUser = (value: UserInterface | null) => setUser(value);

  const checkUserAvailability = (): UserInterface | null | void => {
    try {
      const user = localStorage.getItem('user');
      if (user) {
        console.log("User available:", user);
        return JSON.parse(user);
      }
      console.log("No user in local Storage found...")
    }catch(e: unknown){
      if (e instanceof Error)
        console.error("Could not get the JwtToken from SecureStore:", e);
    }
  }

  const saveUser = async (data: UserInterface) => {
    const jsonData = JSON.stringify(data);
    console.log("Data saved in Secure Store...");
    sessionStorage.setItem('user', jsonData);
  }




  const checkSessionData = () => {
    const userSessionData = sessionStorage.getItem('user');
    if (userSessionData) {
      try {
        const userData: UserInterface = JSON.parse(userSessionData);
        updateUser(userData);
        console.log("User session data fetched...")
      } catch (error) {
        console.error('Failed to parse user session data', error);
      }
    }
  };

  return {
    checkSessionData,
    user,
    updateUser,
    saveUser,
    checkUserAvailability
  }

}
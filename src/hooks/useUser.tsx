import {useState} from "react";
import {UserInterface} from "../interfaces/userInterface";

export const useUser = () => {
  const [user, setUser] = useState<UserInterface | null>(null)

  const updateUser = (value: UserInterface | null) => setUser(value);





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
    updateUser
  }

}
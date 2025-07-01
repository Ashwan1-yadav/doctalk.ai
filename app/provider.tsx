"use client";
import React from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserContext } from "@/context/UserContext";

export type UserDataType = {
  clerkId: string;
  name : string;
  email: string;
  credits: number;
};

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();

  const [userData, setUserData] = React.useState<UserDataType | null>({
    clerkId: "",
    name: "",
    email: "",
    credits: 0,
  });
  

  React.useEffect(() => {
    user && CreateUser();
  }, [user]);

  const CreateUser = async () => {
    if (!user) return;
    const response = await axios.post(
      "/api/users",
      {
        method: "POST",
        userId: user.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setUserData({
      clerkId: user.id,
      name: user.firstName ? user.firstName : "",
      email: user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : "",
      credits: response.data.credits,
    });
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default Provider;

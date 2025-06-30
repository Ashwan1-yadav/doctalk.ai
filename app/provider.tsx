"use client";
import React from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const { user } = useUser();

  React.useEffect(() => {
    user && CreateUser();
  }, [user]);

  const CreateUser = async () => {
    if (!user) return;
    const response = await axios.post("/api/users", {
      method: "POST",
      userId: user.id,
    },{
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response.data:", response.data);
  };

  return <div>{children}</div>;
};

export default Provider;

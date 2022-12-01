import React, { useState, useEffect } from "react";
import { getHelloMessage } from "../api/HelloService";
import HelloMessage from "../model/HelloMessage";

export default function Hello() {
  const [messageState, setMessage] = useState<HelloMessage>({ content: "" });

  useEffect(() => {
    console.log("enter effect");
    getHelloMessage("784b835e-bd9a-4e23-8115-d4c43894a77e")
      .then((result) => setMessage(result.data))
      .then(() => console.log("reload"));
  }, []);

  return <>{messageState.content}</>;
}

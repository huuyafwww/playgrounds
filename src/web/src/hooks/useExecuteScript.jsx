import { useState } from "react";

import Service from "@services/Service";

export const useExecuteScript = () => {
  const [statusLog, setStatusLog] = useState("");

  const executeScript = (language, code) => {
    Service.post(`script/${language}`, {code})
    .then(res => {
      setStatusLog(res.data.result)
    })
    .catch(error => {
      console.error(error);
      return error;
    });
  }

  return {
    statusLog,
    executeScript
  };
};

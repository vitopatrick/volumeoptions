import React from "react";

interface AlertInterface {
  message: String;
}

const Alert = ({ message }: AlertInterface) => {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-paper border border-paper rounded-lg bg-blue-50 overflow-hidden "
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="font-sec">{message}</div>
    </div>
  );
};

export default Alert;

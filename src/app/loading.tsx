import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default loading;

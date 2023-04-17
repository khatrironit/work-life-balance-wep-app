import Layout from "@/components/layout";
import React from "react";

const AuthenticatedLayout = ({children}) => {
  return (
    <div>
      <Layout />
      <div className="container__wrap">
        {children}
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

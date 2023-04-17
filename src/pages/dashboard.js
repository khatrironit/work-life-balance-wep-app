import React from "react";
import withAuth from "@/components/hoc/with-auth";
import AuthenticatedLayout from "@/shared/authenticated-layout";
import DashboardIndex from "@/components/dashboard";

const Dashboard = () => {

  return (
    <AuthenticatedLayout>
			<DashboardIndex />
    </AuthenticatedLayout>
  );
};

export default withAuth(Dashboard);

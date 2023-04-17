import React from "react";
import SidebarLink from "./SidebarLink";
import { DASHBOARD, USER_CONFIG } from "@/components/constants/routes";

const SidebarContent = ({ onClick }) => {
  const hideSidebar = () => onClick();

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Dashboard"
          route={DASHBOARD}
          onClick={hideSidebar}
        />
        </ul>
        <ul className="sidebar__block">
        <SidebarLink
          title="User Settings"
          route={USER_CONFIG}
          onClick={hideSidebar}
        />
      </ul>
    </div>
  );
};

export default SidebarContent;

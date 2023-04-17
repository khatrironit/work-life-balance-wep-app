import React from "react";
import classNames from "classnames";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ changeMobileSidebarVisiblity, sidebar }) => {
  const sidebarClass = classNames({
    sidebar: true,
    "sidebar--show": sidebar.show,
    "sidebar--collapse": sidebar.collapse,
  });

  return (
    <div className={sidebarClass}>
      <button
        className="sidebar__back"
        onClick={changeMobileSidebarVisiblity}
      />
      <div className="sidebar__wrapper sidebar__wrapper--desktop">
        <SidebarContent onClick={() => {}} />
      </div>
      <div className="sidebar__wrapper sidebar__wrapper--mobile">
        <SidebarContent onClick={changeMobileSidebarVisiblity} />
      </div>
    </div>
  );
};

export default Sidebar;

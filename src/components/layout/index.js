import React from "react";
import classNames from "classnames";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarProps } from "@/store/selectors/sidebar";
import { changeSidebarVisiblity, changeMobileSidebarVisiblity} from '@/store/slices/sidebar'

const Layout = () => {
  const dispatch = useDispatch()
  const sidebar = useSelector(getSidebarProps);

  const layoutClass = classNames({
    layout: true,
    "layout--collapse": sidebar.collapse,
  });

  const toggleMobileSidebarVisiblity = () => dispatch(changeMobileSidebarVisiblity())
  const toggleSidebarVisiblity = () => dispatch(changeSidebarVisiblity())

  return (
    <div className={layoutClass}>
      <Topbar
        changeMobileSidebarVisiblity={toggleMobileSidebarVisiblity}
        changeSidebarVisiblity={toggleSidebarVisiblity}
      />
      <Sidebar
        sidebar={sidebar}
        changeMobileSidebarVisiblity={toggleMobileSidebarVisiblity}
      />
    </div>
  );
};

export default Layout;

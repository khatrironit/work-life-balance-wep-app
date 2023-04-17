import { HAMBURGER } from "@/components/constants/external-urls";

const TopbarSidebarButton = ({
  changeMobileSidebarVisiblity,
  changeSidebarVisiblity,
}) => {
  return (
    <div>
      <button
        className="topbar__button topbar__button--desktop"
        onClick={changeSidebarVisiblity}
      >
        <img src={HAMBURGER} alt="" className="topbar__button-icon" />
      </button>
      <button
        className="topbar__button topbar__button--mobile"
        onClick={changeMobileSidebarVisiblity}
      >
        <img src={HAMBURGER} alt="" className="topbar__button-icon" />
      </button>
    </div>
  );
};

export default TopbarSidebarButton;

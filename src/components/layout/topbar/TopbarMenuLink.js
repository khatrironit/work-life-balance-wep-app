import Link from "next/link";

const TopbarMenuLinks = ({ title, path, onClick=()=>{} }) => {
  return (
    <Link className="topbar__link" href={path} onClick={onClick}>
      <p className="topbar__link-title">{title}</p>
    </Link>
  );
};
export default TopbarMenuLinks;

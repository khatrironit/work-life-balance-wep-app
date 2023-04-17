import React from 'react';
import Link from 'next/link';

const SidebarLink = ({
  title, route, onClick,
}) => (
  <Link
    href={route}
    onClick={onClick}
    activeClassName="sidebar__link-active"
  >
    <li className="sidebar__link">
      <p className="sidebar__link-title">
        {title}
      </p>
    </li>
  </Link>
);

export default SidebarLink;

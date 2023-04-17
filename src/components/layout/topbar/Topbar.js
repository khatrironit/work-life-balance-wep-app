import React from 'react';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import { DASHBOARD } from '@/components/constants/routes';
import Link from 'next/link';

const Topbar = ({ changeMobileSidebarVisiblity, changeSidebarVisiblity }) => {

    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <div className="topbar__left">
            <TopbarSidebarButton
              changeMobileSidebarVisiblity={changeMobileSidebarVisiblity}
              changeSidebarVisiblity={changeSidebarVisiblity}
            />
            <Link className="topbar__logo" href={DASHBOARD} />
          </div>
          <div className="topbar__right">
            <TopbarProfile />
          </div>
        </div>
      </div>
    );
}

export default Topbar;

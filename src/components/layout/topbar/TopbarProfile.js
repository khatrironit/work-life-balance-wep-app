import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '@/store/selectors/user';
import { DASHBOARD, USER_CONFIG } from '@/components/constants/routes';
import { PROFILE_PIC } from '@/components/constants/external-urls';
import { logoutUser } from '@/store/slices/user';

const TopbarProfile = () =>  {
  const dispatch = useDispatch();
  const username = useSelector(getUsername)
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" onClick={toggle}>
          <img className="topbar__avatar-img" src={PROFILE_PIC} alt="avatar" />
          <p className="topbar__avatar-name">{username}</p>
          <div className='topbar__icon'><i class="bi bi-chevron-down"></i></div>
        </button>
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu" onClick={toggle}>
            <TopbarMenuLink title="Dashboard" icon="list" path={DASHBOARD} />
            <TopbarMenuLink title="User Settings" icon="list" path={USER_CONFIG} />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Log Out" icon="exit" path="/" onClick={() => dispatch(logoutUser())} />
          </div>
        </Collapse>
      </div>
    );
}

export default TopbarProfile;

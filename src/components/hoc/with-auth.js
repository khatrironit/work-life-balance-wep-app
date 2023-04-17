import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '@/store/selectors/user';

import { HOME } from '../constants/routes';

const withAuth = (WrappedComponent) => {
  function wrappingComponent(props){
    const router = useRouter();
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        // if(isAuthenticated === false) router.push(HOME);
    }, [isAuthenticated])

    return <WrappedComponent {...props} />
  }
  return wrappingComponent;
}

export default withAuth;

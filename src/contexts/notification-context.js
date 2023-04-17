import { getRandomQuote } from '@/components/constants/notifications';
import useToastify from '@/hooks/use-toastify';
import { getIsAuthenticated } from '@/store/selectors/user';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'
import { useSelector } from 'react-redux';

const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext); 

const NotificationProvider = ({children}) => {
	const isAuthenticated = useSelector(getIsAuthenticated);
  const { notify, renderToast} = useToastify();

	const [waterTimer, setWaterTimer] = useState(0);
	const [breakTimer, setBreakTimer] = useState(0);

	useEffect(() => {
		let quotesInterval;
		if(isAuthenticated){
			quotesInterval = setInterval(() => {
				notify({
					theme: "light",
					toastText: getRandomQuote(),
				})
			}, 30*1000)
		}else{
			if(quotesInterval) clearInterval(quotesInterval)
		}

		return () => clearInterval(quotesInterval)
	}, [isAuthenticated])
	
	useEffect(() => {
		let interval;
		if(isAuthenticated){
			interval = setInterval(() => {
				setWaterTimer(prevTimer => prevTimer + 1000);
				setBreakTimer(prevTimer => prevTimer + 1000)
			} , 1000)
		}else{
			if(interval) clearInterval(interval)
		}

		return () => clearInterval(interval)
	}, [isAuthenticated])

	useEffect(() => {
		if(waterTimer === 20 * 1000){
			notify({toastText: 'Take a sip!', onClose: () => setWaterTimer(0)})
		}
		if(breakTimer === 40 * 1000){
			notify({toastText: 'Take a break!', onClose:() => setBreakTimer(-20*1000)})		
		}
	}, [waterTimer, breakTimer])

	const contextValue = useMemo(() => {
		return {
			waterTimer, breakTimer
		}
	}, [waterTimer, breakTimer])

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
			{renderToast()}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider

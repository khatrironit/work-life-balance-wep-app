import { updateUserConfig } from '@/store/slices/user';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const SettingsForm = ({setEditing}) => {
	const dispatch = useDispatch();
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");
  const [lunchTime, setLunchTime] = useState("14:00");
  const [error, setError] = useState("");

	const saveDetails = () => {
		dispatch(updateUserConfig({
			startTime, lunchTime, endTime
		}));
		setEditing(false);
	}

	const validateForm = () => {
		if(startTime < lunchTime && lunchTime < endTime){
			saveDetails()
		}else{
			setError("Invalid Details")
		}
	}

	const renderError = () => {
		if(error){
			return <div className="form__form-group">
				<div className='form__form-group-error'>{error}</div>
			</div>
		}
	}
	
  return (
    <div className='form'>
      {renderError()}
      <div className="form__form-group">
        <span className="form__form-group-label">Work Sign in Time</span>
        <div className="form__form-group-field">
          <input name="name" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} onFocus={() => setError("")} />
        </div>
      </div>
			<div className="form__form-group">
        <span className="form__form-group-label">Lunch Time</span>
        <div className="form__form-group-field">
          <input name="name" type="time" value={lunchTime} onChange={(e) => setLunchTime(e.target.value)} onFocus={() => setError("")} />
        </div>
      </div>
			<div className="form__form-group">
        <span className="form__form-group-label">Work Sign out Time</span>
        <div className="form__form-group-field">
          <input name="name" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} onFocus={() => setError("")} />
        </div>
      </div>
      <button
        className={`btn btn-primary account__btn account__btn--small mt-3`}
        onClick={validateForm}
      >
        Save
      </button>
      
    </div>
  )
}

export default SettingsForm

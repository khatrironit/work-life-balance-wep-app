import React from 'react'

const SettingsList = ({ userConfig, setEditing}) => {
  const { startTime, lunchTime, endTime } = userConfig; 
  return (
    <div className='form'>
      <div className="form__form-group">
        <span className="form__form-group-label">Work Sign in Time</span>
        <div className="form__form-group-field">
				<span className="form__form-group-label">{startTime}</span>
        </div>
      </div>
			<div className="form__form-group">
        <span className="form__form-group-label">Lunch Time</span>
        <div className="form__form-group-field">
				<span className="form__form-group-label">{lunchTime}</span>
        </div>
      </div>
			<div className="form__form-group">
        <span className="form__form-group-label">Work Sign out Time</span>
        <div className="form__form-group-field">
				<span className="form__form-group-label">{endTime}</span>
        </div>
      </div>
			<button
        className={`btn btn-primary mt-3`}
        onClick={() => setEditing(true)}
      >
        Edit Details
      </button>
    </div>
  )
}

export default SettingsList

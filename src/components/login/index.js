import { loginUser } from "@/store/slices/user";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_CONFIG } from "../constants/routes";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isSignInDisabled = !username || !password

  const onSignIn = () => {
    dispatch(loginUser({
      username
    }))
    router.push(USER_CONFIG)
  }

  return (
    <div className="form">
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <input name="name" type="text" placeholder="Name/Email" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`form__form-group-button${
              showPassword ? " active" : ""
            }`}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="bi bi-eye" />
          </button>
        </div>
        <div className="account__forgot-password">
          <a href="/">Forgot a password?</a>
        </div>
      </div>
      <button
        className={`btn btn-primary account__btn account__btn--small mt-3 ${isSignInDisabled ? "disabled" : ""}`}
        onClick={onSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginForm;

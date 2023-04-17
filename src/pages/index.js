import LoginForm from '@/components/login';

const Login = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Work
              <span className="account__logo-accent">Buddy</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Manage your work life balance easily</h4>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Login

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { createPassword } from "../redux/operations";

const ResetPasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleReset = (e) => {
    e.preventDefault();

    dispatch(
      createPassword({
        password: e.target.elements.password.value,
        password_confirm: e.target.elements.confirm.value,
      })
    );
  };

  return (
    <div>
      <h2 className="title">Create new Password?</h2>
      <form onSubmit={handleReset} className="form">
        <label className="label password">
          Password
          <div className="input__wrapper">
            <input type="password" placeholder="Password" id="password" />
          </div>
        </label>
        <label className="label password">
          Confirm Password
          <div className="input__wrapper">
            <input type="password" placeholder="Password" id="confirm" />
          </div>
        </label>
        <button type="submit" className="login__btn">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;

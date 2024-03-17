import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { resetPassword } from "../redux/operations";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleForgot = (e) => {
    e.preventDefault();

    dispatch(
      resetPassword({
        email: e.target.elements.email.value,
        redirect_url: "https://auth-qa.qencode.com/password-set",
      })
    );
  };
  return (
    <div>
      <h2 className="title">Forgot Password?</h2>
      <form onSubmit={handleForgot} className="form">
        <label className="label email">
          <div className="input__wrapper">
            <input type="text" placeholder="Enter your email" id="email" />
          </div>
        </label>

        <div className="forgot__buttons__wrapper">
          <button type="submit" className="login__btn">
            Send
          </button>
          <Link to="/" className="back__link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;

import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const handleForgot = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="title">Forgot Password?</h2>
      <form onSubmit={handleForgot}>
        <label className="label email">
          <input type="text" placeholder="Enter your email" />
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

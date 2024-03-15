const ResetPasswordPage = () => {
  const handleReset = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="title">Create new Password?</h2>
      <form onSubmit={handleReset}>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <label>
          Confirm Password
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit" className="login__btn">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;

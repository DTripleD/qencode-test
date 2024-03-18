import css from "./ResetPasswordPage.module.css";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { createPassword } from "../../redux/operations";

import ApplyButton from "../../components/Buttons/ApplyButton";
import PasswordLabel from "../../components/Label/PasswordLabel";

const ResetPasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const confirmPasswordInput = form.elements.namedItem(
      "confirm"
    ) as HTMLInputElement;

    console.log(passwordInput.value === confirmPasswordInput.value);

    if (passwordInput.value !== confirmPasswordInput.value) {
      return toast.error("Password not same");
    }

    dispatch(
      createPassword({
        password: passwordInput.value,
        password_confirm: confirmPasswordInput.value,
      })
    );
  };

  return (
    <div>
      <h2 className={css.title}>Create new Password?</h2>
      <form onSubmit={handleReset} className={css.form}>
        <PasswordLabel
          placeholder="Password"
          labelText="Password"
          name="password"
        />
        <PasswordLabel
          placeholder="Password"
          labelText="Confirm Password"
          name="confirm"
        />
        <ApplyButton text="Reset Password" />
      </form>
    </div>
  );
};

export default ResetPasswordPage;

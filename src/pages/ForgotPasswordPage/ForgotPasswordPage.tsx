import css from "./ForgotPasswordPage.module.css";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { resetPassword } from "../../redux/operations";

import EmailLabel from "../../components/Label/EmailLabel";
import ApplyButton from "../../components/Buttons/ApplyButton";
import CancelButton from "../../components/Buttons/CancelButton";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const confirmPasswordInput = form.elements.namedItem(
      "mail"
    ) as HTMLInputElement;

    dispatch(
      resetPassword({
        email: confirmPasswordInput.value,
        redirect_url: "https://auth-qa.qencode.com/password-set",
      })
    )
      .then((res) => {
        if (res.meta.requestStatus === "rejected") {
          throw new Error();
        }

        toast.success(res.payload.detail);
      })
      .catch(() => toast.error("User not found"));
  };
  return (
    <div>
      <h2 className={css.title}>Forgot Password?</h2>
      <form onSubmit={handleForgot} className={css.form}>
        <EmailLabel placeholder={"Enter your email"} />

        <div className={css.forgot__buttons__wrapper}>
          <ApplyButton text="Send" />

          <CancelButton text="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;

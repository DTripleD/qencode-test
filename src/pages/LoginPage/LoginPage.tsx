import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";

import icons from "../../images/icons.svg";

import { loginn } from "../../redux/operations";
import { AppDispatch } from "../../redux/store";

import EmailLabel from "../../components/Label/EmailLabel";
import ApplyButton from "../../components/Buttons/ApplyButton";
import PasswordLabel from "../../components/Label/PasswordLabel";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        dispatch(
          loginn({
            email: res.data.email,
            password: res.data.sub,
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem("mail") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    dispatch(
      loginn({
        email: emailInput.value,
        password: passwordInput.value,
      })
    )
      .then((res) => {
        if (res.payload.details) {
          throw new Error();
        }

        toast.success(res.payload.detail);
      })
      .catch(() => toast.error("User not found"));
  };

  return (
    <div>
      <h2 className={css.title}>Log in to your account</h2>
      <div className={css.log}>
        <div className={css.login__btn__wrapper}>
          <button onClick={() => login()} className={css.login__with}>
            <svg className={css.icon__service}>
              <use href={icons + "#google"}></use>
            </svg>
            Google
          </button>
          <button className={css.login__with} onClick={() => {}}>
            <svg className={css.icon__service}>
              <use href={icons + "#github"}></use>
            </svg>
            Github
          </button>
        </div>
        <p className={css.variant}>or</p>
        <form onSubmit={handleLogin} className={css.form}>
          <EmailLabel placeholder={"Work email"} />
          <PasswordLabel placeholder={"Password"} name="password" />
          <Link to="/forgot" className={css.forgot}>
            Forgot your password?
          </Link>
          <ApplyButton text="Log in to Qencode" />
          <p className={css.have_acc}>
            Is your company new to Qencode?{" "}
            <Link to="/reset" className={css.span}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import css from "./Buttons.module.css";

const ApplyButton = ({ text }: { text: string }) => {
  return (
    <button type="submit" className={css.login__btn}>
      {text}
    </button>
  );
};

export default ApplyButton;

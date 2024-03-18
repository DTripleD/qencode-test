import css from "./Label.module.css";

const EmailLabel = ({ placeholder }: { placeholder: string }) => {
  return (
    <label className={`${css.label} ${css.email}`}>
      <div className={css.input__wrapper}>
        <input
          className={css.input}
          type="email"
          placeholder={placeholder}
          name="mail"
        />
      </div>
    </label>
  );
};

export default EmailLabel;

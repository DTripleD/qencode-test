import css from "./Label.module.css";

import { useState } from "react";

import icons from "../../images/icons.svg";

const PasswordLabel = ({
  placeholder,
  labelText,
  name,
}: {
  placeholder: string;
  labelText?: string;
  name: string;
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <label className={`${css.label} ${css.password}`}>
      {labelText}
      <div className={css.input__wrapper}>
        <input
          className={css.input}
          type={isShown ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          minLength={8}
        />
        <svg
          className={css.icon__eye}
          onClick={() => setIsShown((prev) => !prev)}
        >
          <use href={icons + "#eye"}></use>
        </svg>
      </div>
    </label>
  );
};

export default PasswordLabel;

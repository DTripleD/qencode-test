import css from "./Buttons.module.css";

import { Link } from "react-router-dom";

const CancelButton = ({ text }: { text: string }) => {
  return (
    <Link to="/" className={css.back__link}>
      {text}
    </Link>
  );
};

export default CancelButton;

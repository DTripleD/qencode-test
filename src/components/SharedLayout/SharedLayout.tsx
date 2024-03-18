import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import css from "./SharedLayout.module.css";

import icons from "../../images/icons.svg";

export const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <svg className={css.icon__logo}>
          <use href={icons + "#logo"}></use>
        </svg>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

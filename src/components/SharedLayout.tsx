import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import icons from "../images/icons.svg";

export const SharedLayout = () => {
  return (
    <>
      <div className="container">
        <svg className="icon__logo">
          <use href={icons + "#logo"}></use>
        </svg>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

import "./App.css";

import { lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "./redux/store";
import { selectUser } from "./redux/selectors";
import { refreshUser } from "./redux/operations";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import { toastOptions } from "./shared/toastOptions";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ResetPasswordPage = lazy(
  () => import("./pages/ResetPasswordPage/ResetPasswordPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const ForgotPasswordPage = lazy(
  () => import("./pages/ForgotPasswordPage/ForgotPasswordPage")
);

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser(user.user.refresh_token));
  }, [dispatch, user.user.refresh_token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/main" />
            }
          />
          <Route
            path="/forgot"
            element={
              <RestrictedRoute
                component={<ForgotPasswordPage />}
                redirectTo="/main"
              />
            }
          />
          <Route
            path="/reset"
            element={
              <RestrictedRoute
                component={<ResetPasswordPage />}
                redirectTo="/main"
              />
            }
          />

          <Route
            path="/main"
            element={<PrivateRoute component={<MainPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

export default App;

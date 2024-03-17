import "./App.css";

import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./redux/selectors";
import { useEffect } from "react";
import { AppDispatch } from "./redux/store";
import { refreshUser } from "./redux/operations";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import MainPage from "./pages/MainPage";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser(user.user.refresh_token));
  }, [dispatch, user.user.refresh_token]);

  return (
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
  );
}

export default App;

//            <RestrictedRoute
//   component={<SignUpPage />}
//   redirectTo="/main"
// />

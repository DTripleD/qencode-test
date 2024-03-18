import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLoggedIn, selectIsRefreshing } from "../redux/selectors";

const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: {
  component: React.ReactNode;
  redirectTo?: string;
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

import { useDispatch } from "react-redux";

import { logOut } from "../../redux/slice";
import { AppDispatch } from "../../redux/store";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      MainPage
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default MainPage;

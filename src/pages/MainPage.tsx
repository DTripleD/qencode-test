import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logOut } from "../redux/slice";

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

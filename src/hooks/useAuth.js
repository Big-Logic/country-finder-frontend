import { useContext } from "react";
import AuthContext from "../providers/AuthProvider/AuthContext";

const useAuth = function () {
  const { loginedUser, storeLoginedUser } = useContext(AuthContext);

  return { loginedUser, storeLoginedUser };
};

export default useAuth;

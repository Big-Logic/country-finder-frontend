import { Navigate, Outlet } from "react-router";
import useValidateLoginedUserState from "../hooks/useValidateLoginedUserState";

const AuthLayout = function () {
  const { loading } = useValidateLoginedUserState();

  if (loading) return <p>Loading</p>;

  return <Outlet />;
};

export default AuthLayout;

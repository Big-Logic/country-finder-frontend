import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getMe } from "../services/me";
import { useNavigate } from "react-router";

const useValidateLoginedUserState = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { loginedUser, storeLoginedUser } = useAuth();
  useEffect(function () {
    if (!loginedUser) {
      (async () => {
        setLoading(true);
        const data = await getMe();
        if (!data) {
          return navigate("/auth/login");
        }
        storeLoginedUser(data);
        setLoading(false);
      })();
    }
  });

  return { loading };
};

export default useValidateLoginedUserState;

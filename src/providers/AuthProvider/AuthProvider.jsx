import { useState } from "react";

// CONTEXT
import AuthContext from "./AuthContext";

// UTILS
import AppError from "../../utils/AppError";

const AuthProvider = ({ children }) => {
  const [loginedUser, setloginedUser] = useState(null);

  // This function accepts both null & regular objects
  function storeLoginedUser(obj) {
    if (typeof obj !== "object") {
      throw new AppError("obj must be an object");
    }

    setloginedUser(obj);
  }

  return (
    <AuthContext value={{ loginedUser, storeLoginedUser }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;

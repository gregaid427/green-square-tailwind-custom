import React, { useState, useMemo, createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../app-constants/functions";
import { useNavigate } from "react-router-dom";
import { END_POINTS } from "../app-constants/urls";

const UserContext = createContext({
  user: "",
  email: "",
  isCompany: false,
  setUser: () => {},
  setEmailForPassword: () => {},
  setIsCompany: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => getLocalStorage("user", null));
  const [email, setEmailForPassword] = useState();
  const [isCompany, setIsCompany] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const request = async (path, method = "GET", data, action) => {
    let url = `${process.env.REACT_APP_HOST}${path}`;
    if (method === "GET" && !!data) {
      const params = new URLSearchParams(data);
      url += `?${params.toString()}`;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: method !== "GET" && !!data ? JSON.stringify(data) : undefined,
      signal: signal,
    })
      .then(async (response) => {
        console.log(response);
        if (response.ok) {
          const responseData = await response.json();
          if (!!responseData.success) {
            return responseData;
          }
        }
      })
      .catch((error) => {
        // toast({
        //   type: "error",
        //   title: "Failed to Process Request",
        //   description: error?.message,
        // });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLocalStorage("user", user);
  }, [user]);

  const logOut = () => {
    request(
      isCompany ? END_POINTS.logOutCompany : END_POINTS.logOutEmployee,
      "POST"
    ).then((res) => {
      if (res.success) {
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
      }
    });
  };
  const value = useMemo(
    () => ({
      user,
      setUser,
      email,
      setEmailForPassword,
      isCompany,
      setIsCompany,
      logOut,
    }),
    [user, email, isCompany]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api/api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [signOut, setSignOut] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function getUser(token) {
    if (token) {
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      console.log("dados", json);
      setLogin(true);
    }
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      console.log(url);
      const json = await tokenRes.json();
      if (json.ok === false) {
        throw new Error(" Usuário inválido");
      }

      const { token } = json;
      await AsyncStorage.setItem("userToken", token);
      await getUser(token);
      // navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);

      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function autoLogin() {
    const token = await AsyncStorage.getItem("userToken");
    if (token !== null) {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Token inválido");

        // console.log("userToken", token);
      } catch (error) {
        console.log(error);

        userLogout();
      }
    }
  }

  useEffect(() => {
    autoLogin();
  }, [userLogout]);

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    await AsyncStorage.removeItem("userToken");
  }, []);
  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { useEffect, useState, useCallback } from "react";
import githubApi from "../api/apiConfig";
import useLocalStorage from 'use-local-storage'
export const useFetchUsers = () => {
  const [value, setValue] = useLocalStorage("user", "fidalgodev");
  const [user, setUser] = useLocalStorage("items", []);
  const [loading, setLoading] = useState(false);
  const handle = (e) => {
    setValue(e.target.value);
  };
  const getUsers = useCallback(() => {
    setLoading(true);
    githubApi
      .get(encodeURI(value))
      .then(({ data }) => {
        setUser([data]);
        setLoading(false);
      });
  }, [value, setUser]);
  useEffect(() => {
    getUsers();
    return () => {};
  }, [getUsers]);
  return [user, value, loading, handle];
};

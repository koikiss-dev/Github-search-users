import { useEffect, useState, useCallback } from "react";
import githubApi from "../api/apiConfig";

export const useFetchUsers = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const handle = (e) => {
    /* e.preventDefault() */
    setValue(e.target.value);
  };
  const getUsers = useCallback(() => {
    setLoading(true);
    githubApi
      .get(value === "" ? "fidalgodev" : encodeURI(value))
      .then(({ data }) => {
        setUser([data]);
        setLoading(false);
      });
  }, [value]);
  useEffect(() => {
    getUsers();
    return () => {};
  }, [getUsers]);
  return [user, value, loading, handle];
};

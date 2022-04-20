import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: "Can not perform fetch request",
  
  });

  useEffect(() => {
    setState({ data: [], loading: true, error: null });

    const controller = new AbortController();

    const signal = controller.signal;

    fetch(url, {
      method: "GET",
      headers: { token: token },  signal })
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

    return () => {
      controller.abort();
    };
  }, [url, token]);

  return state;
};

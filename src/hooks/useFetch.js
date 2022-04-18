import { useEffect, useState } from "react";

export const useFetch = (url, token) => {
  const [state, setState] = useState({
    data: [],
    loading: "hello",
    error: "Can not perform fetch request",
    headers: { token: token },
  });

  useEffect(() => {
    setState({ data: [], loading: true, error: null });

    const controller = new AbortController();

    const signal = controller.signal;

    fetch(url, { signal })
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
  }, [url]);

  return state;
};

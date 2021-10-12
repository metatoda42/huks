import React, { useState, useEffect } from "react";
import FetchData from "./FetchData";

export const FetchMutipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  const url = "https://api.github.com/users/mojombo";

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        setUser(user.login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Rusak</h1>
      </div>
    );
  } else {
    return <FetchData />;
  }
};

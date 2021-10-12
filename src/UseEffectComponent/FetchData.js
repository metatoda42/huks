import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setuser] = useState([]);
  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setuser(users);
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div>
      <ul className="users">
        {user.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>
                  <a href={html_url}>{login}</a>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchData;

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";

const PrivateRouter = ({ child }) => {
  const token = localStorage.getItem("token");
  if (token) {
    const userdata = jwtDecode(token);
    console.log(userdata);
  }

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/auth")
  //       .then((user) => console.log(user.name + "was logged in"))
  //       .catch((err) => console.log(err));
  //   }, []);
  return <>{child}</>;
};

export default PrivateRouter;

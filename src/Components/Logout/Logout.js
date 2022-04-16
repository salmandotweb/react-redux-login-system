import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import classes from "./Logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className={classes.logout}>
      <h1>
        Welcome <span>{`${user.name}!`}</span>
      </h1>
      <button
        className={`btn ${classes.logoutBtn}`}
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

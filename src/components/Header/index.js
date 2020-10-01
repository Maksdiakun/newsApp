import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "firebase";
import userAction from "../../store/actions/userAction";
import "./header.scss";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    auth().signOut();
    dispatch(userAction(null));
  };
  return (
    <header>
      {user && (
        <a href="#" onClick={logOutHandler}>
          LogOut
        </a>
      )}
      <NavLink to="/liked">Liked Posts</NavLink>
      <NavLink exact to="/">
        Home page
      </NavLink>
      {user ? (
        <NavLink to="/account">My Profile</NavLink>
      ) : (
        <NavLink to="/login">Authorization</NavLink>
      )}
    </header>
  );
};
export default Header;

import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { signOutAction } from "../../store/actions/userAction";

import "./header.scss";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(signOutAction());
  };
  return (
    <header>
      <Container className="d-flex justify-content-between align-items-center">
        {user && (
          <a href="#" onClick={logOutHandler} className="link_st">
            LogOut
          </a>
        )}
        <NavLink className="link_st" to="/liked">
          Liked Posts
        </NavLink>
        <NavLink exact to="/" className="link_st">
          Home page
        </NavLink>
        {user ? (
          <NavLink to="/account" className="link_st">
            My Profile
          </NavLink>
        ) : (
          <NavLink to="/login" className="link_st">
            Authorization
          </NavLink>
        )}
      </Container>
    </header>
  );
};
export default Header;

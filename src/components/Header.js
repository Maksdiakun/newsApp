import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';
import userAction from '../store/actions/userAction'

const Header = ({ user: { user }, changeUser }) => {
    const logOutHandler = () => {
        auth().signOut();
        changeUser(null);
    }
    return (
        <header>
            {user && <a href="#" onClick={logOutHandler}>LogOut</a>}
            <Link to="/liked">Liked Posts</Link>
            <Link to="/">Home page</Link>
            {user ? (
                <Link to="/account">My Profile</Link>
            ) : (
                    <Link to="/login">Authorization</Link>
                )}
        </header>
    )
}
const mapStateToProps = state => {
    return { user: state.user }
};
const mapDispatchToProps = dispatch => {
    return { changeUser: (user) => dispatch(userAction(user)) }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
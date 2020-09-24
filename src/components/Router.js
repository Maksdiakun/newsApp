import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import HomePage from './layout/HomePage';
import NewsFullItem from './NewsFullItem';
import Account from './layout/Account';
import LoginPage from './layout/LoginPage';
import RegisterPage from './layout/RegisterPage';
import LikedPosts from './layout/LikedPosts';

const UseRoute = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/news/:id" component={NewsFullItem} />
                <Route path="/liked" component={LikedPosts} />
                <Route path="/account" component={Account} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </Router>
    )
};

export default UseRoute;
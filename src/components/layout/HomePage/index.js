import React from 'react';
import { connect } from 'react-redux';
import SideBar from '../../SideBar';
import NewsList from '../../NewsList/index';
import NewsHeader from '../../NewsHeader'
import './HomePage.scss'



const HomePage = ({ user }) => {
    return (
        <div style={{ display: 'flex' }}>
            {user && <SideBar user={user} />}
            <main>
                <NewsHeader />
                < NewsList />
            </main>
        </div >
    )

};
const mapStateToProps = state => (
    {
        user: state.user.user
    }
)
export default connect(mapStateToProps)(HomePage);
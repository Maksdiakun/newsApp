import React from "react";
import { connect } from "react-redux";
import SideBar from "../../SideBar";
import NewsList from "../../NewsList";
import NewsHeader from "../../NewsHeader";
import "./HomePage.scss";
import { Container } from "react-bootstrap";

const HomePage = ({ user }) => {
  return (
    <main>
      {user && <SideBar user={user} />}
      <Container>
        <NewsHeader />
        <NewsList />
      </Container>
    </main>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps)(HomePage);

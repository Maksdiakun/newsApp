import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CategorySelect from "../../CategorySelect";
import Input from "../../Input";
import { changeUserData } from "../../../store/actions/userAction";

const inputs = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
];
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  category: "",
};

const Account = ({ user, changeUserData }) => {
  const [state, setState] = useState(initState);
  let newState;
  useEffect(() => {
    setState({
      ...state,
      ...newState,
    });
  }, [user]);
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    changeUserData(state);
  };
  if (user) {
    const { email, displayName, providerData } = user;
    let str = [];
    if (displayName) {
      str = displayName.split("/");
    } else {
      str[0] = " ";
      str[1] = " ";
    }
    newState = {
      firstName: str[0],
      lastName: str[1],
      email: email,
      password: providerData[0].providerId,
      category: user.photoURL ? user.photoURL : "general",
    };
  } else {
    return <Redirect to="/login" />;
  }
  return (
    <div className="account">
      <h1>Your Personal account</h1>
      <div className="account_content">
        <form className="log_form" onSubmit={submitHandler}>
          {inputs.map(({ name, label, type }) => (
            <Input
              key={name}
              name={name}
              changeHandler={changeHandler}
              type={type}
              val={state[name]}
              label={label}
            />
          ))}
          <CategorySelect change={changeHandler} category={state.category} />
          <button className="black_btn" type="submit">
            Submit
          </button>
        </form>
        <div className="account_image">
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f594364b4efee77f6678871%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D6459%26cropY1%3D0%26cropY2%3D3634"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapDispatchToProps = (dispatch) => {
  return {
    changeUserData: (email, password, firstName, lastName, category) =>
      dispatch(changeUserData(email, password, firstName, lastName, category)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);

import { CHANGE_STATUS } from '../constans';
import { auth } from 'firebase';
const userAction = user => {
    return {
        type: CHANGE_STATUS,
        user: user
    };
};
export default userAction;

export const SignInAction = (email, password, history) => dispatch => {
    dispatch(userAction(null));
    auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(userAction(user));
            history.push('/');
        })
        .catch(function (error) {
            alert(error.message);
            console.log(error);
        });
};
export const registerAction = (email, password, firstName, lastName, history) => dispatch => {
    dispatch(userAction(null));
    auth().createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            user.updateProfile({
                displayName: `${firstName}/${lastName}`,
                photoURL: 'general'
            });
            return user
        })
        .then((user) => {
            dispatch(userAction(user));
        }).then(() => {
            history.push('/');
        })
        .catch(function (error) {
            alert(error.message);
            console.log(error);
        });
};
export const changeUserData = ({ email, password, firstName, lastName, category }) => dispatch => {
    const userFirebase = auth().currentUser;
    userFirebase.updateProfile({
        displayName: `${firstName}/${lastName}`,
        photoURL: category
    });
    userFirebase.updateEmail(email)
        .then(() => {
            userFirebase.updatePassword(password)
        })
        .then(() => {
            dispatch(userAction(userFirebase));
        })
        .catch(function (error) {
            alert(error.message);
            console.log(error);
        });
};
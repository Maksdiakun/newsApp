// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

const initFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDsKW6_dLBTX91KtZXGKf79JM00CHeJttU",
        authDomain: "news-app-9b6cf.firebaseapp.com",
        databaseURL: "https://news-app-9b6cf.firebaseio.com",
        projectId: "news-app-9b6cf",
        storageBucket: "news-app-9b6cf.appspot.com",
        messagingSenderId: "813973326877",
        appId: "1:813973326877:web:2ed845e8edea9a692b4af4",
        measurementId: "G-DHXVCN6PEW"
    };
    firebase.initializeApp(firebaseConfig);
}
export default initFirebase;
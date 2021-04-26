import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBmFtwlqyt08G6yoDad2iaMxOuEoA7T8jY",
    authDomain: "react-login-7b901.firebaseapp.com",
    projectId: "react-login-7b901",
    storageBucket: "react-login-7b901.appspot.com",
    messagingSenderId: "432356751435",
    appId: "1:432356751435:web:6487d463f48536c9c4f5ce",
    measurementId: "G-1R5T3NFXHX"
})

export const auth = app.auth();

export default app
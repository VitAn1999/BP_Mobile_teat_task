import getUrl from "./moduls/getUrl";
import translatePage from "./moduls/translatePage";
import formattedPage from "./moduls/formattedPage";
import toggleBtn from "./moduls/toggleBtn";
import firebase from "firebase/app";

document.addEventListener("DOMContentLoaded", async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBok5MUiKdqyy5B_h01CYVUvWnUhgQAJtE",
    authDomain: "bp-mobile-test-task.firebaseapp.com",
    projectId: "bp-mobile-test-task",
    storageBucket: "bp-mobile-test-task.appspot.com",
    messagingSenderId: "37728283165",
    appId: "1:37728283165:web:915a9f34132c41dd5df4f4",
    measurementId: "G-SRC3F8VHR4",
  };
  firebase.initializeApp(firebaseConfig);
  let userLang = getUrl();
  toggleBtn();
  translatePage(userLang);
  formattedPage(userLang);
});

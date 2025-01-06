import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCKhJ5rt6PA95vG-nwzVU97HhMAGb9cHHM",
//     authDomain: "bunny-book-1bc75.firebaseapp.com",
//     projectId: "bunny-book-1bc75",
//     storageBucket: "bunny-book-1bc75.firebasestorage.app",
//     messagingSenderId: "1010447565645",
//     appId: "1:1010447565645:web:36c613c64fc01b4a27ad04",
//     measurementId: "G-R4C6Y7V801"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDQ0LwLWyYqHqXVki3oMFKd-oQR__iejZ8",
    authDomain: "bunny-book-75b9a.firebaseapp.com",
    projectId: "bunny-book-75b9a",
    storageBucket: "bunny-book-75b9a.firebasestorage.app",
    messagingSenderId: "522991616960",
    appId: "1:522991616960:web:0dafc761a62b54b4883e25",
    measurementId: "G-FS5K56W0FV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

// const vapidApi = "BOxRH96-yrj8rvPatoit40Ymddsu2kAAnZ2zBUlBCNWUCPrii2naF8sTwEKLktrAxfVn9S9GJpZif5vrUPmHgWU"; // Replace with your VAPID key
const vapidApi = "BNBnFF2Kio8tUitT0WAGvhq-G07gYSZz3Vaq_MqP8STAufYjxdxQjDa20PTV-bJZi-jPN5TtZ5YbdjrWSWPbS-k"; // Replace with your VAPID key


export const requestFcmToken = async () => {
    return Notification.requestPermission()
        .then((permission) => {
            if (permission === "granted") {
                return getToken(messaging, { vapidKey: vapidApi }); // Correct key used here
            } else {
                throw new Error("Notification Not Granted");
            }
        }).catch((err) => {
            console.log(err);
        });
};

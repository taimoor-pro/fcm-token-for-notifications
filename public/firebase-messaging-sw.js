// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCKhJ5rt6PA95vG-nwzVU97HhMAGb9cHHM",
  authDomain: "bunny-book-1bc75.firebaseapp.com",
  projectId: "bunny-book-1bc75",
  storageBucket: "bunny-book-1bc75.firebasestorage.app",
  messagingSenderId: "1010447565645",
  appId: "1:1010447565645:web:36c613c64fc01b4a27ad04",
  measurementId: "G-R4C6Y7V801",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./favicon.ico", // Update as per your app logo
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});

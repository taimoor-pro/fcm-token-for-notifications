import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestFcmToken } from "./firebase";


function App() {
  const [userId] = useState("67486c41610c48afbec5ad0c"); // Example userId
  const [deviceId] = useState("dfs5454zxg"); // Example deviceId
  const [fcmToken, setFcmToken] = useState(null);

  // Function to send the FCM token to the backend
  const saveFcmTokenToBackend = async (token) => {
    if (token) {
      try {
        const response = await axios.post("http://localhost:8000/fcm-token", {
          userId,
          deviceId,
          fcmToken: token,
        });
        console.log("FCM Token saved successfully: ", response.data);
      } catch (error) {
        console.error("Error saving FCM token: ", error);
      }
    }
  };

  useEffect(() => {
    // Fetch the FCM token
    const fetchFcmToken = async () => {
      try {
        const token = await requestFcmToken(); // Get the FCM token
        if (token) {
          setFcmToken(token); // Save token to state
          await saveFcmTokenToBackend(token); // Save token to the backend
        } else {
          console.warn("No FCM token retrieved. Ensure notifications are allowed.");
        }
      } catch (error) {
        console.error("Error fetching FCM token: ", error);
      }
    };

    fetchFcmToken();

  }, []);

  return (
    <div className="App">
      <h1>FCM Token Demo</h1>
      <p>Your FCM Token is: {fcmToken ? fcmToken : "Loading..."}</p>
    </div>
  );
}

export default App;

/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthScreen from "./screens/authscreen";
import ErrorScreen from "./screens/ErrorScreen";
import FlashScreen from "./screens/flashscreen";
import OnboardScreen from "./screens/onboardscreen";
import SignupScreen from "./screens/SignupScreen";
import DashboardPage from "./screens/DashboardPage";
import OfflineScreen from "./screens/OfflineScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SettingsScreen from "./screens/SettingsScreen";
import QuestionUpload from "./screens/QuestionUploadPage";

function App() {
  const [status, setStatus] = useState(Boolean);

  useEffect(() => {
    if (navigator.onLine) {
      setStatus(true);
    }
  }, [status]);


  switch (status) {
    case true:
      return (
        <Routes>
          <Route path="/" exact element={<FlashScreen />} />
          <Route path="/onboard" exact element={<OnboardScreen />} />
          <Route path="/auth" exact element={<AuthScreen />} />
          <Route path="/register" exact element={<SignupScreen />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/admin/*" exact element={<DashboardPage />} />
          <Route path="/master/*" exact element={<DashboardPage />} />
          <Route path="/staff/*" exact element={<DashboardPage />} />
          <Route path="/account/settings" exact element={<SettingsScreen />} />
          <Route path="/account/notification" exact element={<NotificationScreen />} />
          <Route path="/upload/questions" exact element={<QuestionUpload />} />
          <Route path="*" exact element={<ErrorScreen />} />
        </Routes>
      );
      break;
    case false:
      return <OfflineScreen />;
      break;

    default:
      return (
        <>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader active inline="centered" />
            <br />
            <span style={{ fontWeight: "50", opacity: "0.4" }}>
              Fetching Resource...
            </span>
          </div>
        </>
      );
      break;
  }
}

export default App;

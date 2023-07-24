import "./App.css";
import { ErrorPage } from "./Pages/subscription/SubscriptionError";
import { SubscribePage } from "./Pages/subscription/SubscribePage";
import { SuccessPage } from "./Pages/subscription/SubscriptionSuccess";
import { SubscriptionContextProvider } from "./Pages/subscription/Context/SubscriptionContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DuplicatePage } from "./Pages/subscription/SubscriptionDuplicate";
import { AdminLogin } from "./Pages/admin/AdminLogin";
import { AdminContextProvider } from "./Pages/admin/Context/AdminContext";
import { AdminPanel } from "./Pages/admin/AdminPanal";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className=" min-h-screen bg-beige">
      <SubscriptionContextProvider>
        <AdminContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Subscribe" element={<SubscribePage />} />
              <Route path="/SuccessPage" element={<SuccessPage />} />
              <Route path="/ErrorPage" element={<ErrorPage />} />
              <Route path="/DuplicatePage" element={<DuplicatePage />} />
              <Route path="/Admin" element={<AdminLogin />} />
              <Route path="/AdminPanel" element={<AdminPanel />} />
            </Routes>
          </Router>
        </AdminContextProvider>
      </SubscriptionContextProvider>
    </div>
  );
}

export default App;

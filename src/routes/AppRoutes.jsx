import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./../components/pages/LandingPage";
import Login from "./../components/pages/Auth/Login";
import Signup from "./../components/pages/Auth/Signup";
import KundliGenerator from "./../components/pages/KundliGenerator";
import QnA from "../components/pages/QnA";
import Remedies from "./../components/pages/Remedies";
import CompleteProfilePage from "../components/pages/Auth/CompleteProfilePage";
import ProtectedRoute from "../components/pages/Auth/ProtectedRoute";
import AuthInitializer from "../components/pages/Auth/AuthInitializer";
import AboutUs from "../components/pages/Aboutus";
import Services from "../components/pages/services";
import ContactUs from "../components/pages/Contact_us";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
export default function AppRoutes() {
  return (
    <BrowserRouter>
     <AuthInitializer>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route >
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/terms" element={<PrivacyPolicy/>}/>
        </Route>
        <Route path="/" element={
          <ProtectedRoute>
          <LandingPage />
          </ProtectedRoute>
          } />
        <Route path="/kundli" element={
           <ProtectedRoute>
          <KundliGenerator />
           </ProtectedRoute>
          } />
        <Route path="/qna" element={
          <ProtectedRoute>
          <QnA />
          </ProtectedRoute>
          } />
        <Route path="/remedies" element={
          <ProtectedRoute>
          <Remedies />
          </ProtectedRoute>
          } />
        <Route path="/complete-profile" element={
          <ProtectedRoute>
          <CompleteProfilePage/>
          </ProtectedRoute>
          } />

      </Routes>
     </AuthInitializer>
    </BrowserRouter>
  );
}

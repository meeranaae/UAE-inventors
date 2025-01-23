import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

import PaymentInfo from "./pages/membership-registration/payment-info";
import ContactInfo from "./pages/membership-registration/contact-info";
import PersonalInfo from "./pages/membership-registration/personal-info";

import Failure from "./pages/membership-registration/faliure";
import Success from "./pages/membership-registration/success";

import Contact from "./pages/contact";
import Sponsorship from "./pages/sponsorship";

import AboutAssociation from "./pages/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Membership from "./pages/membership";
import Training from "./pages/training";
import AboutAssociationStaff from "./pages/association-staff";
import NewsEventsPage from "./pages/news";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/membership-registration/personal-info"element={<PersonalInfo />} />
            <Route path="/membership-registration/contact-info"element={<ContactInfo />} />
            <Route path="/membership-registration/payment-info"element={<PaymentInfo />} />
            <Route path="/membership-registration/verification-successful"element={<Success />} />
            <Route path="/membership-registration/verification-unsuccessful"element={<Failure />} />
            <Route path="/contact"element={<Contact />} />
            <Route path="/training"element={<Training />} />
            <Route path="/sponsorship"element={<Sponsorship />} />
            <Route path="/membership"element={<Membership />} />
            <Route path="/about"element={<AboutAssociation />} />
            <Route path="/about/staff"element={<AboutAssociationStaff />} />
            <Route path="/news"element={<NewsEventsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

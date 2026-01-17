import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import ProductPage from "@/react-app/pages/Product";
import IntegrationsPage from "@/react-app/pages/Integrations";
import PricingPage from "@/react-app/pages/Pricing";
import ResourcesPage from "@/react-app/pages/Resources";
import ResourceDetailPage from "@/react-app/pages/ResourceDetail";
import DemoPage from "@/react-app/pages/Demo";
import ContactPage from "@/react-app/pages/Contact";
import PrivacyPage from "@/react-app/pages/Privacy";
import TermsPage from "@/react-app/pages/Terms";
import AdminPage from "@/react-app/pages/Admin";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactPage } from '@/contact';
import { HomePage } from '@/home';
import {Footer, Nav} from "@/components";
import {ServiceSpotlight} from "@/services";
import { useScrollToTop } from '@/hooks';

export default function App() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServiceSpotlight/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

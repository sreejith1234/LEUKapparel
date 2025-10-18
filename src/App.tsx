import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import ContactUs from "./pages/ContactUs";
import TShirts from "./pages/TShirts";
import TrackPants from "./pages/TrackPants";
import Hoodies from "./pages/Hoodies";
import Sweater from "./pages/Sweater";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import ContactModal from "./components/ContactModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products/t-shirts" element={<TShirts />} />
            <Route path="/products/track-pants" element={<TrackPants />} />
            <Route path="/products/hoodies" element={<Hoodies />} />
            <Route path="/products/sweater" element={<Sweater />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ContactModal />
          <ScrollToTopButton />
        </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

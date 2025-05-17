import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Hebrew/Index";
import Features from "./pages/Hebrew/Features";
import Solutions from "./pages/Hebrew/Solutions";
import About from "./pages/Hebrew/About";
import Contact from "./pages/Hebrew/Contact";
import Demo from "./pages/Hebrew/Demo";
import NotFound from "./pages/Hebrew/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HebrewIndex from "./pages/Hebrew/Index";
import HebrewFeatures from "./pages/Hebrew/Features";
import HebrewSolutions from "./pages/Hebrew/Solutions";
import HebrewAbout from "./pages/Hebrew/About";
import HebrewContact from "./pages/Hebrew/Contact";
import HebrewDemo from "./pages/Hebrew/Demo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />

        {/* Hebrew Routes */}
        <Route path="/he/" element={<HebrewIndex />} />
        <Route path="/he/features" element={<HebrewFeatures />} />
        <Route path="/he/solutions" element={<HebrewSolutions />} />
        <Route path="/he/about" element={<HebrewAbout />} />
        <Route path="/he/contact" element={<HebrewContact />} />
        <Route path="/he/demo" element={<HebrewDemo />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;

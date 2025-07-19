import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><div className="min-h-screen pt-32 flex items-center justify-center"><h1 className="text-4xl gradient-text">Skills - Coming Soon</h1></div></PageTransition>} />
            <Route path="/resume" element={<PageTransition><div className="min-h-screen pt-32 flex items-center justify-center"><h1 className="text-4xl gradient-text">Resume - Coming Soon</h1></div></PageTransition>} />
            <Route path="/articles" element={<PageTransition><div className="min-h-screen pt-32 flex items-center justify-center"><h1 className="text-4xl gradient-text">Articles - Coming Soon</h1></div></PageTransition>} />
            <Route path="/profiles" element={<PageTransition><div className="min-h-screen pt-32 flex items-center justify-center"><h1 className="text-4xl gradient-text">Profiles - Coming Soon</h1></div></PageTransition>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

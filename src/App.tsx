import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import Index from "@/pages/Index";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import NotFound from "./pages/NotFound";
import { Skills } from "@/pages/skills";




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
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/resume" element={
               <PageTransition>
                 <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
                   <h1 className="text-4xl font-bold mb-6 gradient-text">My Resume</h1>
                   <embed
                      src="/resume.pdf"
                      type="application/pdf"
                      className="w-full max-w-5xl h-[100vh] border rounded-lg shadow-md"
                   />
                   <a
                     href="/resume.pdf"
                     download
                     className="mt-6 text-primary underline hover:text-primary/80 transition"
                   >
                     ⬇ Download Resume
                   </a>
                 </div>
               </PageTransition>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

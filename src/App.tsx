import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LetterGlitch from "./components/LetterGlitch";
import Contests from "./pages/Contests";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import ProblemOfDay from "./pages/ProblemOfDay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full bg-background relative">
          <div className="absolute inset-0 -z-10">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              smooth={true}
              glitchColors={["#2d0a4e", "#6a0dad", "#b07df0", "#ff7a00", "#ffb347"]}
            />
          </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/problem-of-day" element={<ProblemOfDay />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

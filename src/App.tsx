
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import SelectVersion from './pages/SelectVersion';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import { Toaster } from "@/components/ui/sonner";
import DisclaimerDialog from './components/DisclaimerDialog';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/select-version" element={<SelectVersion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingButton />
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;

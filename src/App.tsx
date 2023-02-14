import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "react-query";
import Cart from "./pages/Cart";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <main className="font-font">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </QueryClientProvider>
    </main>
  );
};

export default App;

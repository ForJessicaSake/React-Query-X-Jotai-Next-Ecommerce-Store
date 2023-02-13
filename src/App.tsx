import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const App:React.FC=()=> {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    <Footer/>
    </QueryClientProvider>
  );
}

export default App;

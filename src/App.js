import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <NavBar/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path= "/transactions" element ={<Index/>}/>
            <Route path = "/transactions/new" element = {<New/>}/> 
            <Route path ="/transactions/:index" element ={<Show/>}/>
            <Route path="/transactions/:index/edit" element={<Edit/>}/>
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

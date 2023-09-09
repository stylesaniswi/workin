import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Todo from './Components/Todo';
import NoPage from './Components/NoPage';
import Database from './Components/Database';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="todo" element={<Todo />} />
        <Route path="database" element={<Database />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PlaceHolder from "./components/PlaceHolder/PlaceHolder";
import Home from "./pages/Home/Home";
import AddMember from "./pages/sanjana/AddMember";
import Reminder from "./pages/Samir/Reminder";
import TodoList from "./pages/Sebi/TodoList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sebi" element={<TodoList />} />
        <Route path="/tushan" element={<PlaceHolder title="Tushan" />} />
        <Route path="/sanjana" element={<AddMember />} />
        <Route path="/samir" element={<Reminder />} />
      </Routes>
    </Router>
  );
}

export default App;

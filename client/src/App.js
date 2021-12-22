import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Home />} />
        <Route path="/Register" element={user ? <Home /> : <Register />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/Post/:id" element={<SinglePostPage />} />
        <Route path="/Write" element={user ? <Write /> : <Login />} />
        <Route path="/Settings" element={user ? <Settings /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

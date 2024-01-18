import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./components/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;

  return (
    <div className="App">
      <>
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/setting" element={user ? <Setting/> : <Register/>}/>
            <Route exact path="/write" element={user ? <Write/> : <Register/>}/>
            <Route exact path="/login" element={user ? <Home/> : <Login/>}/>
            <Route exact path="/register" element={user ? <Home /> : <Register />}/>
            <Route exact path="/post/:postID" element={<Single />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

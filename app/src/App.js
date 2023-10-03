import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Loginn from "./Pages/Loginn";
import MyStatus from "./Pages/MyStatus";
import React from "react";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">홈</Link> <br></br>
        {/* <a href="/">Home</a> */}
        <Link to="/Join">회원가입</Link> <br></br>
        <Link to="/Loginn">로그인</Link> <br></br>
        <Link to="/MyStatus">내정보</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Join" element={<Join />}/>
          <Route path="/Loginn" element={<Loginn />}/>
          <Route path="/MyStatus" element={<MyStatus />}/>
        </Routes>
    </div>
  );
}

export default App;

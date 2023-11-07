import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // React Router 관련 import 추가
import { Link } from 'react-router-dom'; // React Router 관련 import 추가

import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Loginn from "./Pages/Loginn";
import MyStatus from "./Pages/MyStatus";
import Main from "./Pages/Main.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);
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


      {isLogin ? 
        // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Main isLogin={isLogin} />: 
        <Loginn />
      }

  </div>
  );
}

export default App;

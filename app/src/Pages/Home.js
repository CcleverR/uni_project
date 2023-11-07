import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div ClassName="HomeMain">
            <h1>대학병원 종합예약 포털</h1>
            <Link to="/">
                <button>홈</button>
            </Link> <br></br>
             <Link to="/Join"><button>회원가입</button>
             </Link> <br></br>
            <Link to="/Loginn"><button>로그인</button>
            </Link> <br></br>
            <Link to="/MyStatus"><button>내정보</button>
            </Link>
            
    </div>

    )
}

export default Home;
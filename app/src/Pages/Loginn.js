// import React from "react";
// import "./styles.css";
import React, { useState } from 'react';

export default function Loginn() {
  let userId = document.querySelector('#userId');
	let userPw = document.querySelector('#userPw'); //아이디 중복 확인 버튼

	const [inputs, setInputs] = useState({  
        username: '',
        userPW: '',
    });

	const onChange = (e) => {
		const { name, value } = e.target  
		const nextInputs = { ...inputs,  [name]: value,}
		setInputs(nextInputs);      
    }

	function letsLogin() {
		if(inputs.userId===""){
			alert("아이디를 입력해주세요.");
			return;
		}else if(inputs.userPw==="false"){
			alert("비밀번호를 입력해주세요");
			return;
		}else{
		   fetch("/login", { //원하는 주소 입력
			   method: 'post',
			   headers: {
				   'content-type': 'application/json'
			   },
			   body : JSON.stringify({
					userId : inputs.username,
				   userPW : inputs.userPW
			   })
		   }).then(res => res.json())
			   .then(response => {
				console.log(response.Authorization);
				if(response.Authorization==null){
                    alert("아이디 혹은 비밀번호를 확인해주세요.");
                }else{
                   alert("로그인 되었습니다");
				   	window.localStorage.setItem("Authorization", response.Authorization);
                    window.location.href="/home";
                }
			   });
		}
	}
    
    return (
	<div className="userLoginBox" >
		<div className="form-box login-register-form-element" id="userLoginBox_in">
			
			<h2 className="form-box-title">계정 로그인</h2>
	
			<form className="form" id="loginFrm" >
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="text" id="userId" name="username" placeholder="아이디" onChange={onChange}/>
						</div>
					</div>
				</div>

				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="userPw" name="userPW" placeholder="비밀번호" onChange={onChange}/>
						</div>
					</div>
				</div>

				
				<div className="form-row">
					<div className="form-item">
						<input type="button" className="button medium secondary" onClick={letsLogin} id="loginBtn"  value="로그인"/>
					</div>
				</div>
			</form>
		</div>
	</div>


  );
}
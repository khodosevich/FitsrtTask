import React, {useState} from 'react';
import MuButton from "../UI/MuButton";
import person from './../persons.json';
import { useNavigate} from "react-router-dom";

function SingUpForm ()  {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


    const checkPerson = (e) =>{
        e.preventDefault();


        let checkPerson = false;

        for (let i = 0; i < 4 ; i++){
            if(person[i].login === login && person[i].password === password){
                navigate('/profile');
                checkPerson = true;
            }
        }

        if(checkPerson === false){
            alert("Имя пользователя или пароль введены не верно ");
        }

        setLogin('')
        setPassword('')

    }

    return (
            <div className="login-page">
                <div className="container-login">
                    <div className="content-login">
                        <h1 className="title-login"> Sign UP</h1>
                        <div className="sign-up">
                            <form action="">
                                <h2 className="sign-up-text">Login</h2>
                                <input
                                    value={login}
                                    onChange={ e => setLogin(e.target.value)}
                                    className="input-sign-up" type="text"
                                    placeholder="login"
                                />
                                <h2 className="sign-up-text">Passord</h2>
                                <input
                                    value={password}
                                    onChange={ e => setPassword(e.target.value)}
                                    className="input-sign-up" type="password"
                                    placeholder="password"
                                />
                               <div className="btn">
                                   <MuButton onClick = {checkPerson} className="btn-sign-up">Войти</MuButton>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingUpForm;
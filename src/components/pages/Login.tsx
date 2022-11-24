import React, {useState} from 'react';
import User from "../../store/user";
import {IRegisterResponse} from "../../types";

const Login = () => {

    const [showPass, setShowPass] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");


    const registerUser = async () => {
        const reqBody = {
            "email": emailInput,
            "password": passwordInput
        }
        const res = await fetch(" http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseJson: IRegisterResponse = await res.json();
        const token = responseJson.accessToken
        User.setToken(token)
        User.setIsAuth(true)
    }

    const signInUser = async () => {
        const reqBody = {
            "email": emailInput,
            "password": passwordInput
        }
        const res = await fetch(" http://localhost:5000/signin", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseJson: IRegisterResponse = await res.json();
        const token = responseJson.accessToken
        User.setToken(token)
        User.setIsAuth(true)
    }


    const onSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        signInUser();
    }

    const onRegister = () => {
        registerUser()
    }

    const onShowPass = () => {
        setShowPass(prev => !prev)
    }

    return (
        <div>
            <form>
                <input type="email" placeholder="email" value={emailInput} onChange={(e) => {
                    setEmailInput(e.target.value)
                }}/>
                <input type={showPass ? "text" : "password"} placeholder="password" value={passwordInput}
                       onChange={(e) => {
                           setPasswordInput(e.target.value)
                       }}/>
                <input type="button" value="Зарегистрировать" onClick={onRegister}/>
                <input type="submit" value="Войти" onClick={onSubmit}/>
                <input type="checkbox" onClick={onShowPass}/> Показать пароль
            </form>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import User from "../../../store/user";
import { IRegisterResponse } from "../../../types";
import './Login.sass'

const Login: React.FC = () => {

    const [showPass, setShowPass] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errorNotification, setErrorNotification] = useState("")


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

        if (typeof responseJson === "string") {
            setErrorNotification(responseJson)
        } else {
            const token = responseJson.accessToken
            User.setToken(token)
            User.setIsAuth(true)
        }

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

        const responseJson: IRegisterResponse = await res.json()
        
        if (typeof responseJson === "string") {
            setErrorNotification(responseJson)
        } else {
            const token = responseJson.accessToken
            const userId = responseJson.user.id
            User.setToken(token)
            User.setUserId(userId)
            User.setIsAuth(true)
        }
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
        <div className='login-container'>
            <form>
                <input type="email" placeholder="email" value={emailInput} onChange={(e) => {
                    setEmailInput(e.target.value)
                }} />
                <input type={showPass ? "text" : "password"} placeholder="password" value={passwordInput}
                    onChange={(e) => {
                        setPasswordInput(e.target.value)
                    }} />
                <div className='show-pass'><input type="checkbox" onClick={onShowPass} /> Показать пароль</div>
                <div className='buttons-container'>
                    <input className='btn' type="button" value="Sign up" onClick={onRegister} />
                    <input className='btn' type="submit" value="Sign In" onClick={onSubmit} />
                </div>
            </form>
            {!!errorNotification.length &&
                <div className='error-notification'>
                    <h4>{errorNotification}</h4>
                </div>
            }
        </div>
    );
};

export default Login;
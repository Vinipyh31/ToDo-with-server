import {makeAutoObservable} from "mobx";

class User {

    token = "";
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setToken(newToken: string) {
        this.token = newToken;
        localStorage.setItem('token', newToken);
    }

    setIsAuth(auth: boolean) {
        this.isAuth = auth;
        localStorage.setItem('auth', String(auth));
    }
}

export default new User();
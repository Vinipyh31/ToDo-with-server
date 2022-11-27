import {makeAutoObservable} from "mobx";

class User {

    token = "";
    isAuth = false;
    userId = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setUserId(id : number) {
        this.userId = id;
        localStorage.setItem('userId', String(id));
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
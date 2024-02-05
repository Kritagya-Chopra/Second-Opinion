import axios from 'axios'
const url="http://localhost:8080/login";

class LoginService{
    validateUser(){
        return axios.get(url);
    }
}

export default new LoginService();
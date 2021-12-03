import axios from 'axios';


const URI_Basic ="http://localhost:8080/Emp/all";

class UserService{
    getUsers(){
       return axios.get(URI_Basic,{
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        });
    }
}

export default new UserService();
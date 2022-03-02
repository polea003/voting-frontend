import axios from 'axios'
const url = 'http://localhost:5000/api/users'

class UserService{

static Login(Username, Password){
    return axios.post(url, {Username, Password})}
}
export default UserService
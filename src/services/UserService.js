import axios from 'axios'
const url = 'http://localhost:5000/api/users'

class UserService{

    static async login (email, password){
        const loginData = {
            email, password
        }
        try {
            const response = await axios.post(`${url}/login`, loginData)
            if (response.status === 200) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    }
    
}

export default UserService
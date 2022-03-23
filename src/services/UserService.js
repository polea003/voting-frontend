import axios from 'axios'
const url = '/api/api/users'

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
    static async GetMe(email) {
        const response = await axios.get(`${url}/me`, email)
        try {
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
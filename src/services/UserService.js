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
    static async ElectionSubmit(Uid, Eid){
        const response = await axios.put(`${url}/Election${Uid}/${Eid}`) 
        console.log(response)
    }

}

export default UserService
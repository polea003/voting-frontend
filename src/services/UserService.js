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
    static async ElectionSubmit(Uid, Eid){
        const response = await axios.put(`${url}/Election${Uid}/${Eid}`) 
        console.log(response)
    }
    static async UpdateE(id){
        const response = await axios.get(`${url}/UpdateE${id}`)
       // const  res = new Proxy( await response.data.ElectionsVoted, {})
        //console.log( response.data.ElectionsVoted.then())
        
        var promProxy = new Proxy(await response.data.ElectionsVoted, {
            get: function(target, prop) {
              var value = target[prop];
              return typeof value == 'function' ? value.bind(target) : value;
            }
          });
          //console.log(promProxy)
        return promProxy
    }

}

export default UserService
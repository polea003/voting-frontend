import axios from 'axios';
const API_URL = '/api/api/users/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
          console.log(response.data)
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
  reload(user){

    return axios
    .post(API_URL + 'reload', {
      email: user.email,
      
    })
    .then(response => {
      //localStorage.removeItem('user');
        console.log(response.data)
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  }
  register(user) {
    
    return axios.post(API_URL + 'user', {
      name: user.username,
      email: user.email,
      password: user.password,
      ElectionsVoted: [],
      role: "Student"
      
    });
  }
  
}
export default new AuthService();
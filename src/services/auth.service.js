import axios from 'axios';
const API_URL = 'http://localhost:5000/api/users/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
          console.log("hello")
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    
    return axios.post(API_URL + 'user', {
      name: user.username,
      email: user.email,
      password: user.password
    });
  }
  
}
export default new AuthService();
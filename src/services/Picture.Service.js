import axios from 'axios'
const url = 'http://localhost:5000/api/upload/'

class PictureService{


    static uploadPicture(pic) {
        return axios.post(url + 'upload', pic)
    }
    static getPicture(){
        return axios.get(url + 'files')
    }

}
export default PictureService
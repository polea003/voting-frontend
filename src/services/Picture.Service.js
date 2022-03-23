import axios from 'axios'
const url = '/api/api/upload/'

class PictureService{


    static uploadPicture(pic) {
        return axios.post(url + 'upload', pic)
    }
    static getPicture(){
        return axios.get(url + 'files')
    }

}
export default PictureService
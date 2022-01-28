import axios from 'axios'
const url = 'http://localhost:5000/api/elections/'

class ElectionsService {
    //get
    static async getElections() {
        // return new Promise(async (resolve, reject) => {
        //     try {
        //         const res = await axios.get(url)
        //         const data = res.data
        //         resolve(
        //             data.map(post => ({
        //                 ...post,
        //                 createdAt: new Date(post.createdAt)
        //             }))
        //         )
        //     } catch(err) {
        //         reject(err)
        //     }
        // })
        const response = await axios.get(url)
        return response.data.map(election => ({
                            ...election,
                            createdAt: new Date(election.createdAt)
                        }))
  }

    //create election
    static createElection(text, club) {
        return axios.post(url, {
            text,
            club
        })
    }

    //delete
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default ElectionsService
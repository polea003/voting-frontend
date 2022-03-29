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
    static createElection(text, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName, Candidate2LastName, Poisition, Vote1, Vote2, FirstName, LastName,NumberOfCandidates, Vote, startTime, endTime) {
        return axios.post(url, {
            text,
            club,
            Candidate1FirstName,
            Candidate1LastName,
            Candidate2FirstName,
            Candidate2LastName,
            Poisition,
            Vote1,
            Vote2,
            FirstName,
            LastName,
            NumberOfCandidates,
            Vote,
            startTime,
            endTime,
        })
    }

    //delete
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
    static UpdateElection(electionId, Canadent_Number, userId){
        return axios.put(`${url}${electionId}/${Canadent_Number}/${userId}`)
    }
    //get votes from blockchain
    static getBlockchainVotes(electionId){
        return axios.get(`${url}solana/${electionId}`)
    }
}

export default ElectionsService
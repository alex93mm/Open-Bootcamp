import APIRequest from "../utils/config/axios.config";

export async function getRandomJoke() {
    return APIRequest.get('/', { 
        validateStatus: function (status) {
            return status < 500;
        }
    })
    .catch((error) => {
        console.log(`Something went wrong ${error}`)
    }); 
}

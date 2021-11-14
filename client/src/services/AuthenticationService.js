import Api from "./Api";

//this method post the credentials to the register endpoint on the express server
export default {
    register(credentials) {
        return Api().post('register',credentials)
    }
}
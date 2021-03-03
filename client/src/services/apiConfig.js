
let apiUrl
const apiUrls = {
    production: 'https://jess-api-exercise-mongo.herokuapp.com/api',
    development: 'http://localhost:3000/api'
}
if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
const api = axios.create({
    baseURL: apiUrl
})
export default api
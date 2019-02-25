/**
 * dependency injection
 *  - jquery
 *  - axios
 * 'https://orcseven.com/api/orcv2'
 */
const API_URL_PATH = window.location.hostname === 'localhost' ? 'http://localhost:8081/orcv2' : 'http://151.236.61.70:8081/api/orcv2'

function httpRequestApi (method, params) {
    return axios({
        method: method,
        url: API_URL_PATH,
        data: params
    })
}

if($ && axios){
    console.log('well done!!')
} else {
    console.warn('error dependencies ')
}
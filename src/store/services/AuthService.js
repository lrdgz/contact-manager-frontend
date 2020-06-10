import HttpService from './HttpService';

export const SignUpService = (redentials) => {
    const http = HttpService();
    let signUpUrl = "user/register";
    return http.postData(redentials, signUpUrl)
    .then(
        data=>{
            console.log(JSON.stringify(data));
            return data;
        }
    )
    .catch(error=>console.log(error));
}
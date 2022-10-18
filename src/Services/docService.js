import http from './httpService/httpService';
import config from '../Utilities/config.json';
const apiEndPoint = config.apiUrl;
export function Docregister(doctor)
{
    return http.post(`${apiEndPoint}/doctors`,{

        name: doctor.name,
        username : doctor.username,
        password : doctor.password,
        email : doctor.email,
        phone: doctor.phone,
        
    })
}

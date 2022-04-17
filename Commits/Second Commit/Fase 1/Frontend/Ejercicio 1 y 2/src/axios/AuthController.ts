import axios, { AxiosRequestConfig } from 'axios'

const apiBaseUrl = 'http://localhost:3333'

export const loginFetch = async (email: string, password: string) => {
    let options: AxiosRequestConfig<any> = {
        url: `${apiBaseUrl}/openAPI/foro/auth/login`,
        data: {
            email: email,
            password: password
        },
        method: 'POST'
    }
    const token =
        axios(options)
            .then((response) => {
                return (JSON.stringify(response.data.token))
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
        
    return token
}

export const registerFetch = async (email: string, password: string, username: string) => {
    
    let options: AxiosRequestConfig<any> = {
        url: `${apiBaseUrl}/openAPI/foro/auth/register`,
        data: {
            username: username,
            avatar: 'none',
            email: email,
            role: 'user',
            password: password,
        },
        method: 'POST'
    }

    const token = 
        axios(options)
            .then((response) => {
                return (JSON.stringify(response.data.token))
            })
            .catch((error) => {
                alert(JSON.stringify(error.response.data.errors))
            })

    return token

}

import Header from '../components/containers/Header'
import ThemeContainer from '../components/containers/ThemeContainer'
import axios, { AxiosRequestConfig } from 'axios'

export default function HomePage() {

  const apiBaseUrl = 'http://localhost:3333'

  const loadIndex = () => {
    let options: AxiosRequestConfig<any> = {
      url: apiBaseUrl,
      method: 'GET'
    }
    return axios(options).then((response) => alert(response.data))
  }

  return (
    <div className='min-h-screen bg-slate-100'>
        <Header type="logo"/>
        <ThemeContainer/>
        <button onClick={ loadIndex }>Nuevo boton</button>
    </div>
  )
}

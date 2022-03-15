import Header from '../components/containers/Header'
import ThemeContainer from '../components/containers/ThemeContainer'

export default function HomePage() {

  return (
    <div className='min-h-screen bg-slate-100'>
        <Header type="logo"/>
        <ThemeContainer/>
    </div>
  )
}

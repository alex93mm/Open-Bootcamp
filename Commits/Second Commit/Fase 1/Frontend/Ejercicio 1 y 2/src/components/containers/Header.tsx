import ButtonBack from '../pure/ButtonBack'
import LogoHeader from '../pure/HeaderLogo'
import SearchHeader from '../pure/HeaderSearch'
import UserData from '../pure/UserData'

type Props = {
  type: string,
}

export default function Header({type}: Props) {

  const styleHeader: string = type == "logo" ? "grid grid-cols-3 pt-4" : "grid grid-cols-3 pt-4 bg-white"

  return (
    <div className={ styleHeader }>
        {type=="logo" 
            ? (<LogoHeader/>)
            : (<ButtonBack/>)}
        <div className='grid grid-cols-1 col-start-4 xl:grid-cols-2'>
          <SearchHeader/>
          <UserData/>
        </div>
    </div>
  )
}

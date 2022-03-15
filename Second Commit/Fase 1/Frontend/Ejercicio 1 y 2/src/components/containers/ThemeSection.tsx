import SearchTheme from "../pure/ThemeSearch"
import SortButton from "../pure/ButtonSort"
import ThemeTitle from "../pure/ThemeTitle"

type Props = {
  selectedTheme: {name: string, image: string},
  isLoading: boolean
}

export default function ThemeSection( { selectedTheme, isLoading }: Props ) {
  return (
    <div className='h-40 min-w-full pt-1 rounded-lg bg-gradient-to-r from-green-400 to-blue-500'>
        <div className="h-32 min-w-full px-6 mt-16 bg-white rounded-lg">
            {selectedTheme.name != ''
                ? (<>
                <ThemeTitle isLoading={isLoading} selectedTheme={ selectedTheme }/>
                <div className="grid grid-cols-2 sm:grid-cols-[6fr_0.1fr]">
                  <SearchTheme/>
                  <SortButton/>
                </div>
                </>) 
                : null}
        </div>
    </div>
  )
}

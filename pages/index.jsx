import { ArrowDownIcon } from '@chakra-ui/icons'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import HomeLarge from '../components/homelarge'
import { Show, Hide } from '@chakra-ui/react'
import HomeSmall from '../components/homesmall'

const Home = () => {
    return (
        <div>
            <Show below="sm">
                <HomeSmall />
            </Show>
            <Hide below="sm">
                <HomeLarge />
            </Hide>
        </div>
    )
}

export default Home

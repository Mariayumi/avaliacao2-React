import { Header, Logo, MainContainer, SubContainer, Light, Dark } from '../../styles/theme'
import '../../styles/style.css'

import { CgDarkMode } from 'react-icons/cg'
import useContexto from '../../hooks/useContexto'
import { Left } from '../../components/Left'
import { Right } from '../../components/Right'
import { fifa } from '../../assets'

export function Main() {
    const { theme, setTheme } = useContexto()

    const ThemeChange = () => {
        if (theme.name === 'light') {
            setTheme(Dark);
        }
        else {
            setTheme(Light);
        }
    }

    return (
        <>
            <Header>
                <Logo src={fifa} alt="logo" />
            </Header>

            <MainContainer>
                <SubContainer>
                    <Left />
                    <Right />

                    <div></div>
                    <CgDarkMode onClick={ThemeChange} />
                </SubContainer>
            </MainContainer>
        </>
    )
}
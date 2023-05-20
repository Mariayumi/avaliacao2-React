import { useEffect, useState } from 'react'
import axios from 'axios'

// styles ✨
import { ButtonTheme, Header, Logo, MainContainer, SubContainer } from '../../styles/theme'
import '../../styles/style.css'

// components ✨
import { Right } from '../../components/Right'
import { Left } from '../../components/Left'
import { CgDarkMode } from 'react-icons/cg'
import { fifa } from '../../assets'

export function Main() {
    const [theme, setTheme] = useState('light');

    const ThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Header>
                <Logo src={fifa} alt="logo" />
            </Header>
            <MainContainer theme={theme}>
                <SubContainer theme={theme}>
                    <Left />
                    <Right />
                    
                    <div></div>
                    <CgDarkMode onClick={ThemeChange} />
                </SubContainer>
            </MainContainer>
        </>
    )
}
import { useContext } from "react";
import { DarkModeContext } from "./App";
function Footer() {

    const context = useContext(DarkModeContext);
    
    const {isDark ,setIsDark} = context;

    const onClickHandler = () => {
        setIsDark(!isDark)
    }

    return(
        <footer
            className="footer"
            style={{
                backgroundColor: isDark? 'black' :  'lightgray',
                color: isDark? 'white' : 'black'
            }}
        >
            <button onClick={onClickHandler}>{isDark? '라이트모드' : '다크모드'}</button>
            Copyright 2024. team-ohgiraffers 
        </footer>
        
    )
}

export default Footer;
import { useContext } from "react";
import { DarkModeContext } from "./App";
function Content(){

    const context = useContext(DarkModeContext);
    
    const {isDark} = context;
    return(

        <div 
            className="content"
            style={{
                backgroundColor: isDark? 'gray' : 'white',
                color: isDark? 'red' : 'black'
            }}>
            <p>Content 영역입니다^.^</p>
        </div>
    );
}

export default Content;
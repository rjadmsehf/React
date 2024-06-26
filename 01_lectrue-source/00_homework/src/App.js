import { createContext } from "react";
import { useState } from "react";
import Page from "./Page";


function App() {
  
  const [isDark, setIsDark] = useState(false)
  

  return (
      <DarkModeContext.Provider value={{isDark, setIsDark}}> 
          <Page/>
      </DarkModeContext.Provider>
  ); 
}

export default App;
export const DarkModeContext = createContext(null);

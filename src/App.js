import {useEffect} from "react"
import Router from './router';
import Header from "./components/header/header";
import { BrowserRouter } from "react-router-dom";
import Theme from "./theme/theme";


function App() {
  useEffect(() =>{
    localStorage.setItem("theme" , "light");
  },[])
  return (
   <>
   <BrowserRouter>
   <Header />
   <Router />
   <Theme />
   </BrowserRouter>
   </>
  );
}

export default App;

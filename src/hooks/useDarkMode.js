import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

//Takes in the key from Navbar
export const useDarkMode = (key) => {

    //passes that Key to useLocalStorage so it can be stored
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", key);
  
    useEffect((cb) => {
      const body = document.querySelector("body");
      if(darkMode){
          body.classList.toggle("dark-mode");
      } else{
        body.classList.remove("dark-mode"); 
      }
      return cb;
    }, [darkMode]);
  
    return [darkMode, setDarkMode];
  };
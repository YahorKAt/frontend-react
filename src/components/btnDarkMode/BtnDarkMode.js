import { useEffect} from "react";
import { useLocalStorage } from "./../../utils/useLocalStorage";

import sun from "./sun.svg";
import moon from "./moon.svg";
import detectDarkMode from "../../utils/detectDarkMode";

import "./style.css"


const BtnDarkMode = () => {
 
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if(darkMode === 'dark'){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    }, [darkMode]);


    // Если меняются системные настройки, меняем тему
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    },[setDarkMode])

    const toggleDarkMode=()=>{
        setDarkMode((currentValue)=>{
            return currentValue === 'light'?'dark':'light';
        });
    };

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return ( 
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
        );
}

export default BtnDarkMode;
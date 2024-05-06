import useLocalStorage from "./useLocalStorage"
import './theme.css'


export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'light');

    function ToggleTheme() {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (<div className='light-dark' data-theme={theme}>
        <div className="container">
            <p>Implementação do Componente de mudança de tema.</p>
            <button onClick={ToggleTheme}>Mudar Tema</button>
        </div>
    </div>)
}
import useRequestData from "./Components/useRequestData"
import './App.css'

const App = () => {
    const[data,isLoading,error] = useRequestData('https://hp-api.herokuapp.com/api/characters')

    const renderedWizards = data && data.map((wiz,i)=> {
        return <p key={i}> {wiz.name} </p>
    })

    return(
        <div>
            <h4>Lista de Bruxos:</h4>
            {isLoading && <h4>Carregando...</h4>}
            {!isLoading && error && <p> Error! Recarregue a Página. </p>}
            {!isLoading && data && data.length > 0 && renderedWizards}
            {!isLoading && data && data.length === 0 && <h4> Não há pessoa</h4>} 
        </div>
    )
} 
export default App
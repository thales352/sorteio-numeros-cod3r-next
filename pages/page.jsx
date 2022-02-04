import { useState } from "react"
import Input from '../components/Input'
import Button from "../components/Button"
import { Sorteio } from "../functions/Sorteio"


export default function page(){
    const [valor,setValor] = useState(6)
    const [numero,setSort] = useState([])

  
    
    const styleContainer = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height: "100vh",
        
    }
    const styleResultado = {
        display: "flex",
        padding:"5px",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: "70%",
        flexWrap: "wrap"
    }
    const styleBola = {
        display: "flex",
        borderRadius:"50%",
        background:"#333",
        height: "100px",
        width: "100px",
        justifyContent:"center",
        alignItems:"center",
        alignItems:"center",
        color: "white",
        fontSize: "2.5rem",
        margin:"1rem",
        flexDirection: "column",

    }
    const styleInputs = {
        display: "flex",
        width: "100%",
        justifyContent:"center",
        
    }
    function reSort(){
        setSort(Sorteio(valor))
    }
    function renderSort(){
        return numero.map(n=><div key={n} style={styleBola}>{n}</div>)
    }
   
    return (<>
        <div style={styleContainer} >
            <div style={styleResultado}>
                {renderSort()}
                <div style={styleInputs}>
                    <Input value={valor} funcao={setValor}/> 
                    <Button funcao={reSort} >Sortear</Button>
                </div>
            </div>
 
        </div>
    
    </>)
}
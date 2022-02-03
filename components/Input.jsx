import style from '../modules/Input.module.css'

export default function Input(props){
    return(
        <div className={style.container}>
            <input className={style.input} value={props.value} onChange={(e)=>{
            props.funcao(e.target.value)
        }} type="number" placeholder=' ' min={6} max={20}>
        </input>
        <label>Número</label>
        </div>
        )
}
import style from '../modules/Button.module.css'

export default function Button(props){
    return <button className={style.botao} onClick={props.funcao}>{props.children}</button>
}
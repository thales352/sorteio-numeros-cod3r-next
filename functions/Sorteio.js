export function Sorteio(num=6,list=[]){
    let qtde = +num
    if (0>qtde || qtde>60) {
        throw "Quantidade Invalida"
    }
    
    if (list.length === qtde)return list.sort((n1,n2)=>n1-n2)
    
    let sorteado = parseInt(Math.random()*60)+1
    if (list.includes(sorteado))return Sorteio(qtde,[...list])
    return Sorteio(qtde,[...list,sorteado])

}


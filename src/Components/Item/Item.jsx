import s from './Item.module.css'
function Item({nome, imagem, preco}) {
    return(
        <div className={s.container}>
            <img src={imagem} alt="{nome}"/>
            <div>
                <p>{nome}</p>
                <p>1Kg/{preco}</p>
                <p>{preco}</p>
            </div>
        </div>
    )
}
export default Item
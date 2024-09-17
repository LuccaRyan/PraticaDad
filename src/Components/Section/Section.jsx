import s from './Section.module.css'
import Item from '../Item/Item'
function Section({titulo, subtitulo, itens, cor}) {

    return (    
        <section >   
            <h1 className={s.title}>{titulo}</h1>
            <h2 style={{backgroundColor: cor}} className={s.subtitle}>{subtitulo}</h2>
            <div className={s.container}>
                {itens.map((item, index) => (
                    <Item key={index} nome={item.nome} imagem={item.imagem} preco={item.preco} />
                ))}
            </div>
            
        </section>
    )
}

export default Section
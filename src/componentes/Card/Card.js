import { ContainerCard, ContainerImagem } from "./styled"
import { PainelDeVideo } from "../../styledGlobal"

function Card (props){
    return(
        <ContainerCard onClick={props.reproduz}>
            <ContainerImagem src={props.link} alt=""/>
            <h4>{props.titulo}</h4>
        </ContainerCard>
    )
}

export default Card
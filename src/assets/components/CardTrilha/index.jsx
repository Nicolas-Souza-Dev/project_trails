import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}) {

    return(
        <div className="card_container">
        <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
        <div className="card_dados">
        <h1>{dadosTrilha.nomeTrilha}</h1>
        <span className="nome_usuario">Por: {dadosTrilha.nomeUsuario}</span>
        <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
        <span>Duração: {dadosTrilha.duracao}</span>
        <span>Trajeto: {dadosTrilha.trajeto}</span>
        <span>{dadosTrilha.dificuldade}!</span>
        </div>
      </div>

    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.oneOf(['Caminhada / Trakking', 'Cicilismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
})
}

export default CardTrilha
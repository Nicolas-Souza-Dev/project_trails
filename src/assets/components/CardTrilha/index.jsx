import * as PropTypes from "prop-types"

function CardTrilha({dadosTrilha}) {

    return(
        <div className="card_container">
        <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
        <h1>{dadosTrilha.nomeTrilha}</h1>
        <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
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
import React from "react";
import EquipaTable from "../equipaTable/EquipaTable";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.scss";

const GrupoCard = ({ groupName, grupo }) => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="grupoCard">
      <h2>{groupName}</h2>
      <table>
        <tr>
          <th>{windowWidth >= 1050 ? "Posição" : "Pos"}</th>
          <th className="equipa">{windowWidth >= 1050 ? "Equipa" : "E"}</th>
          {windowWidth >= 600 ? (
            <th>{windowWidth >= 1050 ? "Jogos" : "J"}</th>
          ) : null}

          <th>{windowWidth >= 1050 ? "Vitórias" : "V"}</th>
          <th>{windowWidth >= 1050 ? "Empates" : "E"}</th>
          <th>{windowWidth >= 1050 ? "Derrotas" : "D"}</th>
          {windowWidth >= 600 ? (
            <>
              <th>{windowWidth >= 1050 ? "Marcados" : "G/M"}</th>
              <th>{windowWidth >= 1050 ? "Sofridos" : "G/S"}</th>
              <th>{windowWidth >= 1050 ? "Diferença de golos" : "D/G"}</th>
            </>
          ) : null}
          <th>{windowWidth >= 1050 ? "Pontos" : "P"}</th>
        </tr>
        {grupo?.map((equipa, index) => (
          <EquipaTable
            key={equipa.nome}
            posicao={index + 1}
            nome={equipa.nome}
            jogos={equipa.jogos}
            vitorias={equipa.vitorias}
            empates={equipa.empates}
            derrotas={equipa.derrotas}
            marcados={equipa.marcados}
            sofridos={equipa.sofridos}
            diferencaDeGolos={equipa.diferencaDeGolos}
            pontos={equipa.pontos}
          />
        ))}
      </table>
    </div>
  );
};

export default GrupoCard;

import React from "react";
import { Comentario } from "./styled";

export default function Comentarios(props) {
  return (
    <Comentario>
      <div>
        <input
          value={props.textoNovoComentario}
          onChange={props.onChangeComentario}
          placeholder="Adicionar comentario"
        />
      </div>
      <button onClick={() => props.alteraCurtida()}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={props.adicionaComentario}>Comentar</button>
      <button onClick={props.apagarComentario}>Excluir Comentário</button>
      <p>{props.comentario.comentario}</p>
    </Comentario>
  );
}

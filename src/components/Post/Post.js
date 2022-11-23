import React from "react";
import { PostContainer } from "./styled";
import Comentario from "../Comentario/Comentario";

export const Post = (props) => {
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>

      {/* Exercício final de debug*/}

      <Comentario
        post={props.post}
        alteraCurtida={props.alteraCurtida}
        comentario={props.comentario}
        textoNovoComentario={props.textoNovoComentario}
        adicionaComentario={props.adicionaComentario}
        onChangeComentario={props.onChangeComentario}
        apagarComentario={props.apagarComentario}
      />
    </PostContainer>
  );
};

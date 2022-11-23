import React, { useState } from "react";
import "./index.css";
import { Post } from "./components/Post/Post";

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("");
  const [post, setPost] = useState({});
  const [textoNovoComentario, setTextoNovoComentario] = useState("");
  const [comentario, setComentario] = useState({});

  // Seta o valor para o novo post

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  };

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false
    };

    setPost(novoPost);
    setTextoNovoPost("");
  };

  const apagarPost = () => {
    // Apaga o post enviado
    setPost("");
  };

  const alteraCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: !post.curtido
    };
    setPost(alterarCurtida);
  };

  // Seta o valor para o novo comentário

  const onChangeComentario = (e) => {
    setTextoNovoComentario(e.target.value);
  };

  // Adiciona comentário

  const adicionaComentario = () => {
    const novoComentario = {
      ...post,
      comentario: textoNovoComentario
    };
    setComentario(novoComentario);
    setTextoNovoComentario("");
  };

  // Apagar comentário

  const apagarComentario = () => {
    setComentario("");
  };

  return (
    <div className="App">
      <div className="btn">
        <input
          value={textoNovoPost}
          onChange={onChangeTextoNovoPost}
          placeholder="Digite o texto aqui"
        />
        <button onClick={adicionarPost}>Adicionar</button>
        <button onClick={() => apagarPost()}>Apagar</button>
      </div>
      <br />
      <Post
        post={post}
        alteraCurtida={alteraCurtida}
        apagarPost={apagarPost}
        comentario={comentario}
        textoNovoComentario={textoNovoComentario}
        onChangeComentario={onChangeComentario}
        adicionaComentario={adicionaComentario}
        apagarComentario={apagarComentario}
      />
    </div>
  );
}

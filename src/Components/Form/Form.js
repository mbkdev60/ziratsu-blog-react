import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form() {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const newArticle = {
      title : inputsRef.current[0].value,
      body : inputsRef.current[1].value
    }

    dispatch({
      type: "ADDARTICLE",
      payload: newArticle
    });

    e.target.reset()
  };

  const inputsRef = useRef([]);

  const addRefs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  return (
    <>
      <h1 className="title-form">Écrivez un artcile</h1>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          ref={addRefs}
          type="text"
          id="title"
          placeholder="Entrez votre nom"
          className="inp-title"
        />

        <label htmlFor="article">Votre article</label>
        <textarea
          ref={addRefs}
          id="article"
          placeholder="Votre article"
          className="inp-body"
        ></textarea>

        <button>Envoyez l'article</button>
      </form>
    </>
  );
}

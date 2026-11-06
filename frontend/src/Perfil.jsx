import React from "react";
import "./Perfil.css";
import { Link } from "react-router-dom";

function Perfil() {
    return (
        <div className="perfil-pagina">
            <main className="perfil-conteudo">
                <div className="perfil-topo">
                    <div className="perfil-foto">
                        <img src="https://placehold.co/150x150" alt="Foto de perfil"/>
                    </div>

                    <div className="perfil-informacoes">
                        <div className="perfil-nome">
                            <h3>nome1</h3>
                            <button>Editar perfil</button>
                            <button>Ver itens arquivados</button>
                        </div>

                        <p>180 posts 448 seguidores 559 seguindo</p>
                        <p>
                            Software Development Student
                            <br />
                            Interior Designer | Rendering
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Perfil;
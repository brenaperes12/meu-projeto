import React from "react";
import "./Perfil.css";

function Perfil() {
    return (
        <div className="perfil-pagina">
            <aside className="perfil-sidebar">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-house"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-regular fa-compass"></i>
                <i className="fa-solid fa-clapperboard"></i>
                <i className="fa-brands fa-facebook-messenger"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-square-plus"></i>
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-bars"></i>
            </aside>

            <main className="perfil-conteudo">
                <div className="perfil-topo">
                    <div className="perfil-foto">
                        <img
                            src="https://placehold.co/150x150?text=Perfil"
                            alt="Foto de perfil"
                        />
                    </div>

                    <div className="perfil-informacoes">
                        <div className="perfil-nome">
                            <h3>nome1</h3>
                            <button>Editar perfil</button>
                            <button>Ver itens arquivados</button>
                            <i className="fa-solid fa-gear"></i>
                        </div>

                        <p>180 posts　448 seguidores　559 seguindo</p>
                        <p>
                            Software Development Student
                            <br />
                            Interior Designer | Rendering
                        </p>
                    </div>
                </div>

                <div className="perfil-abas">
                    <i className="fa-solid fa-grip"></i>
                    <i className="fa-regular fa-circle-play"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-arrows-rotate"></i>
                    <i className="fa-regular fa-id-badge"></i>
                </div>
            </main>
        </div>
    );
}

export default Perfil;
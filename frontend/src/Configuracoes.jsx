
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Configuracoes.css";

function Configuracoes() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("nome1");
    const [nome, setNome] = useState("Nome do Usuário");
    const [bio, setBio] = useState("Bem-vindo ao meu perfil!");
    const [foto, setFoto] = useState("https://placehold.co/100x100");

    function salvarPerfil(e) {
        e.preventDefault();

        alert("Perfil atualizado com sucesso!");
    }

    function sairConta() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className="config-pagina">
            <div className="config-container">
                <div className="config-topo">
                    <button className="btn-voltar" onClick={() => navigate("/feed")}>
                        <i className="bi bi-arrow-left"></i>
                        Voltar
                    </button>

                    <h3>Configurações</h3>
                </div>

                <h5>Editar perfil</h5>
                <div className="config-foto">
                    <img src={foto} alt="Perfil" />

                    <div>
                        <strong>{usuario}</strong>
                        <p>Altere as informações do seu perfil.</p>
                    </div>

                </div>

                <form onSubmit={salvarPerfil}>
                    <div className="mb-3">
                        <label>Nome de usuário</label>
                        <input type="text" className="form-control" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Nome completo</label>
                        <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Biografia</label>
                        <textarea className="form-control" value={bio} onChange={(e) => setBio(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Foto de perfil (URL)</label>
                        <input type="text" className="form-control" value={foto} onChange={(e) => setFoto(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn-salvar">
                        Salvar alterações
                    </button>
                </form>

                <div className="config-sair">
                    <h5>Sair da conta</h5>
                    <p>Deseja sair da sua conta?</p>
                    <button className="btn-sair" onClick={sairConta}>
                        <i className="bi bi-box-arrow-right"></i>
                        Sair da conta
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Configuracoes;

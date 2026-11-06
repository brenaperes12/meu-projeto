
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Feed.css";
import { Link } from "react-router-dom";

function Feed() {

    const [posts, setPosts] = useState([]);
    const [sugestoes, setSugestoes] = useState([]);
    const [curtidos, setCurtidos] = useState([]);


    useEffect(() => {
            fetch("/api/posts")
                .then(res => res.json())
                .then(dados => setPosts(dados))
                .catch(erro => console.log("Erro ao buscar publicações:", erro));

            fetch("/api/suggestions")
                .then(res => res.json())
                .then(dados => setSugestoes(dados))
                .catch(erro => console.log("Erro ao buscar sugestões:", erro));
    }, []);
    

    function curtir(id) {

        if (curtidos.includes(id)) {
            setCurtidos(curtidos.filter(item => item !== id));
        } else {
            setCurtidos([...curtidos, id]);
        }

    }

    return (
        <div className="feed-pagina">
            <aside className="feed-sidebar">
                <div className="feed-logo">
                    <img src="https://static.cdninstagram.com/rsrc.php/yO/r/Ny6hrBVLYjl.webp" height={30} alt="logo"/>
                </div>

                <nav className="feed-menu">
                    <a href="#"><i className="bi bi-house-door-fill"></i></a>
                    <a href="#"><i className="bi bi-camera-reels"></i></a>
                    <a href="#">
                        <i className="bi bi-send"></i>
                        <span className="notificacao">2</span>
                    </a>
                    <a href="#"><i className="bi bi-search"></i></a>
                    <a href="#"><i className="bi bi-heart"></i></a>
                    <a href="#"><i className="bi bi-plus-square"></i></a>
                    
                    <a href="#">
                        
                        <img src="https://placehold.co/80x80?text=EU" alt="Perfil"/>
                    </a>
                </nav>

                <div className="feed-menu-final">
                    <a href="#"><i className="bi bi-list"></i></a>
                    <a href="#"><i className="bi bi-grid"></i></a>
                </div>
            </aside>

            <main className="feed-conteudo">
                <section className="feed-stories">
                    {["nome1", "nome2", "nome3", "nome4", "nome5", "nome6"].map((nome) => (
                        <div className="feed-story" key={nome}>
                            <div className="feed-story-borda">
                                <img
                                    src={`https://placehold.co/100x100?text=${nome}`}
                                    alt={nome}
                                />
                            </div>

                            <span>{nome}</span>
                        </div>
                    ))}

                </section>

                <section className="feed-publicacoes">
                    {posts.map(post => (
                        <article className="feed-post" key={post.id}>
                            <div className="feed-post-topo">
                                <img
                                    src={post.avatar}
                                    alt={post.usuario}
                                />
                                <div className="feed-post-usuario">
                                    <strong>
                                        {post.usuario}
                                        <i className="bi bi-patch-check-fill"></i>
                                    </strong>
                                    <span>{post.tempo}</span>
                                </div>

                                <button className="feed-mais">
                                    <i className="bi bi-three-dots"></i>
                                </button>
                            </div>

                            <img
                                src={post.imagem}
                                className="feed-foto"
                                alt="Publicação"
                            />

                            <div className="feed-indicadores">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="feed-acoes">
                                <div className="feed-acoes-esquerda">
                                    <button onClick={() => curtir(post.id)}>
                                        <i className={`bi ${curtidos.includes(post.id) ? "bi-heart-fill feed-curtido" : "bi-heart"}`}></i>
                                    </button>
                                    <button>
                                        <i className="bi bi-chat"></i>
                                    </button>
                                    <button>
                                        <i className="bi bi-arrow-repeat"></i>
                                    </button>
                                    <button>
                                        <i className="bi bi-send"></i>
                                    </button>
                                </div>
                                <button>
                                    <i className="bi bi-bookmark"></i>
                                </button>
                            </div>

                            <div className="feed-legenda">
                                <strong>
                                    {(post.curtidas + (curtidos.includes(post.id) ? 1 : 0)).toLocaleString("pt-BR")} curtidas
                                </strong>
                                <p>
                                    <strong>{post.usuario}</strong> {post.legenda}
                                </p>
                                <span>Ver todos os comentários</span>
                            </div>
                        </article>
                    ))}
                </section>
            </main>

            <aside className="feed-sugestoes">
                <h6>Sugestões para você</h6>
                {sugestoes.map(pessoa => (
                    <div className="feed-sugestao" key={pessoa.id}>
                        <img
                            src={pessoa.avatar}
                            alt={pessoa.nome}
                        />
                        <div className="feed-sugestao-info">
                            <strong>{pessoa.nome}</strong>
                            <span>{pessoa.info}</span>
                        </div>
                        <button>Seguir</button>
                    </div>
                ))}
            </aside>
        </div>
    );
}

export default Feed;

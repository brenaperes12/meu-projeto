
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Login.css";

function Login() {
  return (
    <div className="pagina">
      <div className="lado-esquerdo">
        <div className="logo">
          <img src="https://static.cdninstagram.com/rsrc.php/yO/r/Ny6hrBVLYjl.webp" height={50} alt="logo"/>
        </div>

        <div className="apresentacao">
          <h1>
            Veja momentos do dia a dia dos seus
            <br />
            <span>amigos próximos.</span>
          </h1>

          <div className="imagens">
            <img src="https://static.cdninstagram.com/rsrc.php/yN/r/-erGonz07kB.webp" height={500} alt="Instagram"/>
          </div>
        </div>
      </div>

      <div className="lado-direito">
        <div className="login">
          <h5>Entrar no Instagram</h5>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Número de celular, nome de usuário ou email"
            />

            <input
              type="password"
              className="form-control"
              placeholder="Senha"
            />

            <button type="button" className="btn btn-primary entrar">
              Entrar
            </button>
          </form>

          <a href="#" className="esqueceu">
            Esqueceu a senha?
          </a>

          <div className="ou"></div>
          <button className="btn facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" height={15} alt="Facebook"/>
            Entrar como Facebook
          </button>
          <button className="btn criar">
            Criar nova conta
          </button>
          <div className="meta">
            ∞ Meta
          </div>
        </div>
      </div>

      <footer>
        <div className="links">
          <a href="#">Meta</a>
          <a href="#">Sobre</a>
          <a href="#">Blog</a>
          <a href="#">Carreiras</a>
          <a href="#">Ajuda</a>
          <a href="#">API</a>
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Localizações</a>
          <a href="#">Instagram Lite</a>
        </div>

        <p>
          Português (Brasil) © 2026 Instagram from Meta
        </p>
      </footer>
    </div>
  );
}

export default Login;

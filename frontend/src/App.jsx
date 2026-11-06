import React, { useState } from "react";

import Login from "./Login";
import Feed from "./Feed";
import Perfil from "./Perfil";

function App() {
    const [logado, setLogado] = useState(false);
    const [pagina, setPagina] = useState("feed");

    if (!logado) {
        return <Login onEntrar={() => setLogado(true)}/>;
        
    }

    return (
        <div>
            {pagina === "feed" && <Feed />}
            {pagina === "perfil" && <Perfil />}
        </div>
    );
}

export default App;
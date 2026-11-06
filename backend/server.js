
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const posts = [

    {
        id: 1,
        usuario: "nome1",
        avatar: "https://placehold.co/100x100?text=nome1",
        tempo: "18 min",
        imagem: "https://placehold.co/900x1100?text=Publicacao+1",
        curtidas: 10600,
        legenda: "Minha primeira publicação!"
    },

    {
        id: 2,
        usuario: "nome2",
        avatar: "https://placehold.co/100x100?text=nome2",
        tempo: "35 min",
        imagem: "https://placehold.co/900x1100?text=Publicacao+2",
        curtidas: 2500,
        legenda: "Aproveitando o dia!"
    },

    {
        id: 3,
        usuario: "nome3",
        avatar: "https://placehold.co/100x100?text=nome3",
        tempo: "1 h",
        imagem: "https://placehold.co/900x1100?text=Publicacao+3",
        curtidas: 1800,
        legenda: "Mais um momento especial!"
    }

];

const suggestions = [

    {
        id: 1,
        nome: "nome4",
        info: "Sugestões para você",
        avatar: "https://placehold.co/100x100?text=nome4"
    },

    {
        id: 2,
        nome: "nome5",
        info: "9 seguidores em comum",
        avatar: "https://placehold.co/100x100?text=nome5"
    },

    {
        id: 3,
        nome: "nome6",
        info: "Sugestões para você",
        avatar: "https://placehold.co/100x100?text=nome6"
    },

    {
        id: 4,
        nome: "nome7",
        info: "8 seguidores em comum",
        avatar: "https://placehold.co/100x100?text=nome7"
    },

    {
        id: 5,
        nome: "nome8",
        info: "1 seguidor em comum",
        avatar: "https://placehold.co/100x100?text=nome8"
    },

    {
        id: 6,
        nome: "nome9",
        info: "3 seguidores em comum",
        avatar: "https://placehold.co/100x100?text=nome9"
    }

];


app.get("/api/posts", (req, res) => {
    res.json(posts);
});

app.get("/api/suggestions", (req, res) => {
    res.json(suggestions);
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});

console.log("hello world!");

fetch("https://rickandmortyapi.com/api/character").then((res) =>{
    return res.json(); //transforma la respuesta y la convierte en un objeto
}).then((data) =>{
    console.log(data);
})
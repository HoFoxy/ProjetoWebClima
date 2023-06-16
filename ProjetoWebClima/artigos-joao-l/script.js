async function noticias(){
    const noticiaapi = "https://newsdata.io/api/1/news?apikey=pub_24552fa2900973923bb0121f5e8d0e4932e2b&q=agronegocio&country=br"
    const noticia = await fetch(noticiaapi)
    const data = await noticia.json() 
    document.querySelector("#not1").innerHTML = data.results[0].title
    document.querySelector("#desc1").innerHTML = data.results[0].description
    document.querySelector("#not2").innerHTML = data.results[1].title
    document.querySelector("#desc2").innerHTML = data.results[1].description
    document.querySelector("#img1").setAttribute("src", "https://source.unsplash.com/1600x900/?agro")
    document.querySelector("#img2").setAttribute("src", "https://source.unsplash.com/1600x900/?agro")
}

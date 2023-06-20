async function noticias(){
    apikey = "..."
    const noticiaapi = `https://newsdata.io/api/1/news?apikey=${apikey}&q=agronegocio&country=br`
    const noticia = await fetch(noticiaapi)
    const data = await noticia.json() 
    link1 = data.results[3].link
    link2 = data.results[4].link
    img1 = data.results[3].image_url
    img2 = data.results[4].image_url

    document.querySelector("#not1").innerHTML = data.results[3].title
    document.querySelector("#desc1").innerHTML = data.results[3].description
    document.querySelector("#not2").innerHTML = data.results[4].title
    document.querySelector("#desc2").innerHTML = data.results[4].description
    
    if(img1 == null){
        document.querySelector("#img1").setAttribute("src", "../artigos-joao-l/img/semimg.jpg")
    }
    else{
        document.querySelector("#img1").setAttribute("src", img1 )
    }

    if(img2 == null){
        document.querySelector("#img2").setAttribute("src", "../artigos-joao-l/img/semimg.jpg")
    }
    else{
        document.querySelector("#img2").setAttribute("src", img2)
    }


    document.querySelector("#link1").setAttribute("href", link1)
    document.querySelector("#link2").setAttribute("href", link2)

    
}


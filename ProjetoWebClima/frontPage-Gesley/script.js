apiKey = "5a6dbc367b74700ff55f22a655c45ddb"
apiBDImagemUnsplash = "https://source.unsplash.com/random/?";
apiBandeiraPais = "https://flagsapi.com/"
tempElement = document.querySelector("#temperatura");
climaIconElement = document.querySelector("#clima-icon");
dadosTemp = document.querySelector(".dadosTemperatura")
dadosLog = document.querySelector(".dadosLogradouro")

document.querySelector("#verificarClima").addEventListener("click", async (e) => {
    e.preventDefault();
    dadosTemp.style.display = "block"
    let cidade = document.querySelector("input[name='cidade']").value
    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
    document.getElementById('imgCidade').setAttribute('src', apiBDImagemUnsplash+cidade);
    const res = await fetch(apiClimaURL)
    const data = await res.json()
    if (data.cod === "404"){
        alert("Cidade Inválida")
        return
    }
    document.getElementById("imgPais").setAttribute("src", apiBandeiraPais+data.sys.country);
    temperatura.innerText = parseFloat(data.main.temp)+ "º";
    humidade.innerText = parseFloat(data.main.humidity)+ "%";
    vento.innerText = parseFloat(data.wind.speed)+ "km/h" 
    tempo.innerText = data.weather[0].description; 
    document.getElementById("cidadeTemp").innerText = cidade;
    document.getElementById("icone").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
    document.getElementById("imgPais").setAttribute("src", apiBandeiraPais+data.sys.country+"/flat/64.png");
    document.getElementById('imgCidade').setAttribute('src', apiBDImagemUnsplash+cidade);
});
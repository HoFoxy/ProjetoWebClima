apiKey = "5a6dbc367b74700ff55f22a655c45ddb";
apiBDImagemUnsplash = "https://source.unsplash.com/random/?";


async function tabelasClima(){
    const apiClimaURLSor = `https://api.openweathermap.org/data/2.5/weather?q=sorocaba&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res1 = await fetch(apiClimaURLSor)
    const data1 = await res1.json()

    
    let temperatura = parseFloat(data1.main.temp);
    let temperaturaMin = parseFloat(data1.main.temp_min);
    let temperaturaMax = parseFloat(data1.main.temp_max);
    let umidade = parseFloat(data1.main.humidity);
    let vento = parseFloat(data1.wind.speed);
    let tempo = data1.weather[0].description;
    let pressao = data1.main.pressure;
    

    document.querySelector('#temperaturaSor').innerHTML = `Temperatura: ${temperatura} º`
    document.querySelector('#temperaturaMinMaxSor').innerHTML = `Max: ${temperaturaMax} º / Mín: ${temperaturaMin} º`
    document.querySelector('#umidadeSor').innerHTML = `Umidade: ${umidade} %`
    document.querySelector('#pressaoSor').innerHTML = `Pressão: ${pressao} mb`
    document.querySelector('#ventoSor').innerHTML = `Vento: ${vento} km/h`
    document.querySelector('#tempoSor').innerHTML = `Tempo: ${tempo}` 
    document.querySelector('#fotoClimaSor').setAttribute('src', apiBDImagemUnsplash+tempo);
    document.querySelector('#imagemSor').setAttribute('src', apiBDImagemUnsplash+'cidade de sorocaba');

    const apiClimaURLVot = `https://api.openweathermap.org/data/2.5/weather?q=votorantim&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res2 = await fetch(apiClimaURLVot)
    const data2 = await res2.json()

    let temperatura2 = parseFloat(data2.main.temp);
    let temperaturaMin2 = parseFloat(data2.main.temp_min);
    let temperaturaMax2 = parseFloat(data2.main.temp_max);
    let umidade2 = parseFloat(data2.main.humidity);
    let vento2 = parseFloat(data2.wind.speed);
    let tempo2 = data2.weather[0].description;
    let pressao2 = data2.main.pressure;

    document.querySelector('#temperaturaVot').innerHTML = `Temperatura: ${temperatura2} º`
    document.querySelector('#temperaturaMinMaxVot').innerHTML = `Max: ${temperaturaMax2} º / Mín: ${temperaturaMin2} º`
    document.querySelector('#umidadeVot').innerHTML = `Umidade: ${umidade2} %`
    document.querySelector('#pressaoVot').innerHTML = `Pressão: ${pressao2} mb`
    document.querySelector('#ventoVot').innerHTML = `Vento: ${vento2} km/h`
    document.querySelector('#tempoVot').innerHTML = `Tempo: ${tempo2}`
    document.querySelector('#fotoClimaVot').setAttribute('src', apiBDImagemUnsplash+tempo2);
    document.querySelector('#imagemVot').setAttribute('src', apiBDImagemUnsplash+'cidade de votorantim');

    const apiClimaURLAra = `https://api.openweathermap.org/data/2.5/weather?q=aracoiaba&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res3 = await fetch(apiClimaURLAra)
    const data3 = await res3.json()

    let temperatura3 = parseFloat(data3.main.temp);
    let temperaturaMin3 = parseFloat(data3.main.temp_min);
    let temperaturaMax3 = parseFloat(data3.main.temp_max);
    let umidade3 = parseFloat(data3.main.humidity);
    let vento3 = parseFloat(data3.wind.speed);
    let tempo3 = data3.weather[0].description;
    let pressao3 = data3.main.pressure;

    document.querySelector('#temperaturaAra').innerHTML = `Temperatura: ${temperatura3} º`
    document.querySelector('#temperaturaMinMaxAra').innerHTML = `Max: ${temperaturaMax3} º / Mín: ${temperaturaMin3} º`
    document.querySelector('#umidadeAra').innerHTML = `Umidade: ${umidade3} %`
    document.querySelector('#pressaoAra').innerHTML = `Pressão: ${pressao3} mb`
    document.querySelector('#ventoAra').innerHTML = `Vento: ${vento3} km/h`
    document.querySelector('#tempoAra').innerHTML = `Tempo: ${tempo3}`
    document.querySelector('#fotoClimaAra').setAttribute('src', apiBDImagemUnsplash+tempo3);
    document.querySelector('#imagemAra').setAttribute('src', apiBDImagemUnsplash+'cidade de Araçoiaba da Serra');

    const apiClimaURLPie = `https://api.openweathermap.org/data/2.5/weather?q=piedade&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res4 = await fetch(apiClimaURLPie)
    const data4 = await res4.json()

    let temperatura4 = parseFloat(data4.main.temp);
    let temperaturaMin4 = parseFloat(data4.main.temp_min);
    let temperaturaMax4 = parseFloat(data4.main.temp_max);
    let umidade4 = parseFloat(data4.main.humidity);
    let vento4 = parseFloat(data4.wind.speed);
    let tempo4 = data4.weather[0].description;
    let pressao4 = data4.main.pressure;

    document.querySelector('#temperaturaPie').innerHTML = `Temperatura: ${temperatura4} º`
    document.querySelector('#temperaturaMinMaxPie').innerHTML = `Max: ${temperaturaMax4} º / Mín: ${temperaturaMin4} º`
    document.querySelector('#umidadePie').innerHTML = `Umidade: ${umidade4} %`
    document.querySelector('#pressaoPie').innerHTML = `Pressão: ${pressao4} mb`
    document.querySelector('#ventoPie').innerHTML = `Vento: ${vento4} km/h`
    document.querySelector('#tempoPie').innerHTML = `Tempo: ${tempo4}`
    document.querySelector('#fotoClimaPie').setAttribute('src', apiBDImagemUnsplash+tempo4);
    document.querySelector('#imagemPie').setAttribute('src', apiBDImagemUnsplash+'cidade de piedade');
}
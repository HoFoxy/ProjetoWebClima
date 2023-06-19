document.querySelector("#btntemp").addEventListener("click", function(){
    document.querySelector("#mapaimg").setAttribute("src", "../mapa-vinicius/img/temp.PNG")
    document.querySelector("#mapamed").setAttribute("src", "../mapa-vinicius/img/temp_med.PNG")
})

document.querySelector("#btnchuva").addEventListener("click", function(){
    document.querySelector("#mapaimg").setAttribute("src", "../mapa-vinicius/img/Chuva.PNG")
    document.querySelector("#mapamed").setAttribute("src", "../mapa-vinicius/img/chuva_med.PNG")
})

document.querySelector("#btnumidade").addEventListener("click", function(){
    document.querySelector("#mapaimg").setAttribute("src", "../mapa-vinicius/img/umidade.PNG")
    document.querySelector("#mapamed").setAttribute("src", "../mapa-vinicius/img/umidade_med.PNG")
})

document.querySelector("#btnpressao").addEventListener("click", function(){
    document.querySelector("#mapaimg").setAttribute("src", "../mapa-vinicius/img/pressao.PNG")
    document.querySelector("#mapamed").setAttribute("src", "../mapa-vinicius/img/pressao_med.PNG")
})

document.querySelector("#btnvento").addEventListener("click", function(){
    document.querySelector("#mapaimg").setAttribute("src", "../mapa-vinicius/img/vento.PNG")
    document.querySelector("#mapamed").setAttribute("src", "../mapa-vinicius/img/vento_med.PNG")
})
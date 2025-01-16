var token = "bb81814f9a12e2b0090c1719a87aaf64"

const funcao = async (cidade) =>{
    var retorno = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cidade+"&units=metric&appid="+token+"&lang=pt_br")
    json = await retorno.json()
    const texto = document.getElementById("texto")
    texto.innerText = toString(json)
}

funcao("Caçapava do sul")
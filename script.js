document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(url)
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].population)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])

        let bandeira = document.getElementById('bandeira')
        let nome = document.getElementById('nome')
        let capi = document.getElementById('capi')
        let cont = document.getElementById('cont')
        let popu = document.getElementById('popu')

        nome.innerHTML = pais
        capi.innerHTML = data[0].capital[0]
        cont.innerHTML = data[0].continents[0]
        popu.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg  
    })
}


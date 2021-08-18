const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

let countKata = 0

const showResult = (result) => {

    countKata += 1

    if (countKata > 20){
        return 0
    }

    let imprimeNomeKata = document.createElement('h1')
    imprimeNomeKata.innerHTML = `Kata ${countKata}`
    document.body.appendChild(imprimeNomeKata)

    let elementImprime = document.createElement('p')
    elementImprime.textContent = JSON.stringify(result)
    document.body.appendChild(elementImprime)

}




function kata1() {
    // implemente aqui o código
    let arrGotCitiesCSV = []
    arrGotCitiesCSV = gotCitiesCSV.split(',')

    showResult(arrGotCitiesCSV)

    return arrGotCitiesCSV
    

}

kata1();

// daqui em diante é contigo

function kata2(){
    let arrBestThing = []
    arrBestThing = bestThing.split(' ')


    showResult(arrBestThing)

    return arrBestThing

    
}

kata2()




function kata03(){

    let arrGotCitiesCSV = []
    arrGotCitiesCSV = gotCitiesCSV.split(',').join(';')

    showResult(arrGotCitiesCSV)

    return arrGotCitiesCSV


}

kata03()




function kata04(){

    let newLotrCitiesArray = lotrCitiesArray.toString()

    showResult(newLotrCitiesArray)

    return newLotrCitiesArray
    
}

kata04()




function kata05() {

    let newLotrCitiesArray = lotrCitiesArray.map((x) => x)
    newLotrCitiesArray = newLotrCitiesArray.splice(0,5)

    showResult(newLotrCitiesArray)

    return newLotrCitiesArray
    
}

kata05()



function kata06() {

    let tamanho = lotrCitiesArray.length
    let newLotrCitiesArray = lotrCitiesArray.map((x) => x)
    newLotrCitiesArray = newLotrCitiesArray.splice(tamanho - 5,tamanho)

    showResult(newLotrCitiesArray)

    return newLotrCitiesArray

}

kata06()



function kata07() {

    let newLotrCitiesArray = lotrCitiesArray.map((x) => x)
    let newArray = []

    for (let i = 0; i < 3; i++){
        newArray[i] = newLotrCitiesArray[i+2]
    }

    showResult(newArray)

    return newArray


}

kata07()



function kata08() {

    let cidadeParaRemover = 'Rohan'
    let indiceDaCidadeParaRemover = 0
    

    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i] === cidadeParaRemover){
            indiceDaCidadeParaRemover = i
        }
    }

    lotrCitiesArray.splice(indiceDaCidadeParaRemover,1)

    showResult(lotrCitiesArray)

    return lotrCitiesArray

}

kata08()



function kata09(){

    let cidadeAPartirParaRemover = 'Dead Marshes'
    let indiceDaCidadeParaRemover = 0
    

    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i] === cidadeAPartirParaRemover){
            indiceDaCidadeParaRemover = i + 1
        }
    }

    lotrCitiesArray.splice(indiceDaCidadeParaRemover,indiceDaCidadeParaRemover)

    showResult(lotrCitiesArray)

    return lotrCitiesArray


}

kata09()



function kata10(){

    let cidadeAPartir = 'Gondor'
    let indiceDaCidadeParaRemover = 0
    

    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i] === cidadeAPartir){
            indiceDaCidadeParaRemover = i + 1
        }
    }

    lotrCitiesArray.splice(indiceDaCidadeParaRemover, 0, 'Rohan')

    showResult(lotrCitiesArray)

    return lotrCitiesArray

}

kata10()



function kata11(){

    let cidadeParaRenomear = 'Dead Marshes'
    let indiceDaCidadeParaRemover = 0
    

    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i] === cidadeParaRenomear){
            indiceDaCidadeParaRemover = i
        }
    }

    lotrCitiesArray.splice(indiceDaCidadeParaRemover, 1, 'Deadest Marshes')

    showResult(lotrCitiesArray)

    return lotrCitiesArray

    
}

kata11()



function kata12(){

    let newBestThing = bestThing
    newBestThing = newBestThing.slice(0,14)

    showResult(newBestThing)

    return newBestThing

}

kata12()



function kata13(){

    let newBestThing = bestThing
    newBestThing = newBestThing.split('').reverse().slice(0,12).reverse().join('')

    showResult(newBestThing)

    return newBestThing
    
}

kata13()



function kata14() {

    let newBestThing = bestThing
    newBestThing = newBestThing.slice(23,38)

    showResult(newBestThing)

    return newBestThing

}

kata14()




function kata15() {

    let newBestThing = bestThing
    newBestThing = newBestThing.substring(newBestThing.length - 12)

    showResult(newBestThing)
    
    return newBestThing
}


kata15()



function kata16() {

    let newBestThing = bestThing
    newBestThing = newBestThing.substring(23,38)

    showResult(newBestThing)

    return newBestThing

}
kata16()




function kata17() {

    let ultimaCidade = lotrCitiesArray.pop()
    
    showResult(lotrCitiesArray)
    
    kata18(ultimaCidade)

    return lotrCitiesArray
}


kata17()



function kata18(addCidadePush) {

    lotrCitiesArray.push(addCidadePush)
    
    showResult(lotrCitiesArray)

    return lotrCitiesArray

}




function kata19() {

    let primeiraCidade = lotrCitiesArray.shift()
    
    showResult(lotrCitiesArray)
    
    kata20(primeiraCidade)
    
    return lotrCitiesArray
}

kata19()



function kata20(addCidadeUnshift) {

    lotrCitiesArray.unshift(addCidadeUnshift)

    showResult(lotrCitiesArray)
    
    return lotrCitiesArray
    
}

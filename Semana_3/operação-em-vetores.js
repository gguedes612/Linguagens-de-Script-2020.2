const sum = function(vetor){
    let result = 0
    for (const index in vetor){
        result += vetor[index]
    }
    return result
}

const sumOdds = function(vetor){
    let result = 0
    for (const index in vetor){
        if (vetor[index] % 2 != 0 ){
            result += vetor[index]
        } 
    }
    return result
}

const product = function(vetor){
    let result = 1
    for (const index in vetor){
        result *= vetor[index]
    }
    return result
}

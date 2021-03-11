const createList = function(numeroElementos,valor = 0){
    if (valor == 0){
        console.log('<ul>')
        for(let i = 1; i <= numeroElementos; i += 1) {
            console.log('    <li>Text '+i+'</li>')
        }
        console.log('</ul>')
 
    } else{
        console.log('<ul>')
        for(let i = 1; i <= numeroElementos; i += 1) {
            console.log('    <li>'+ valor +' '+ i +'</li>')
        }
        console.log('</ul>')
    }
}

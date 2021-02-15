const calc = function(valor1,valor2,operador){
    switch(operador){
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
    }
}

console.log(calc(1,1,'+'))
console.log(calc(1,1,'-'))
console.log(calc(1,1,'*'))
console.log(calc(1,1,'/'))

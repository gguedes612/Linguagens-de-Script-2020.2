const checktype = function(lado1,lado2,lado3){
    if (lado1 == lado2 && lado1 == lado3){
        return 'equilateral'
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        return 'scalene'
    }else return 'isosceles'
}
const exist = function(lado1,lado2,lado3){
    if (lado1 <= lado3 && lado2 <= lado3){
        if (lado1 + lado2 >= lado3){
            return checktype(lado1,lado2,lado3)
        } else return 'none'
    }else if(lado1 <= lado2 && lado3 <= lado2){
            if (lado1 + lado3 >= lado2){
                return checktype(lado1,lado2,lado3)
            } else return 'none'} else if(lado2 <= lado1 && lado3 <= lado1){
                if (lado2 + lado3 >= lado1){
                    return checktype(lado1,lado2,lado3)
            } else return 'none'} else if(lado1 == 0 && lado2 == 0 && lado3 == 0){
                return 'none'
            }
            } 
console.log(exist(0,0,0))
let bienvenida = prompt("Ingrese su nombre")
alert("¡Hola" +" "+ bienvenida +"!")
let i = 0
while (i<1000){

    
    let menuPrincipal = Number(prompt("Selecciona la marca de guitarra para ver su precio:\n1-Gibson\n2-Epiphone\n3-Cort\n4-Fender\n5-Stagg\n6-No quiero consultar más\n¡CON TARJETAS ITAÚ 20% DE DESCUENTO!"))
    if(menuPrincipal === 1){
        let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
        if(precio === 1){
            let conDescuento = descuento(3500, 0.80)
            let ahorro = resta(3500, 0.20)
            alert("USD"+" "+conDescuento+"\nAHORRAS USD "+ahorro)
        }
        else if(precio === 2){
            alert("USD 2500")
        }
        else{alert("Ingrese un valor válido")}
        
    }
    else if(menuPrincipal === 2){
        let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
        if(precio === 1){
            let conDescuento = descuento(1500, 0.80)
            let ahorro = resta(1500, 0.20)
            alert("USD"+" "+conDescuento+"\nAHORRAS USD "+ahorro)
        }
        else if(precio === 2){
            alert("USD 1500")
        }
        else{alert("Ingrese un valor válido")}
    
    }
    else if(menuPrincipal === 3){
        let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
        if(precio === 1){
            let conDescuento = descuento(600, 0.80)
            let ahorro = resta(600, 0.20)
            alert("USD"+" "+conDescuento+"\nAHORRAS USD "+ahorro)
        }
        else if(precio === 2){
            alert("USD 600")
        }
        else{alert("Ingrese un valor válido")}
    
    }
    else if(menuPrincipal === 4){
        let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
        if(precio === 1){
            let conDescuento = descuento(2500, 0.80)
            let ahorro = resta(2500, 0.20)
            alert("USD"+" "+conDescuento+"\nAHORRAS USD "+ahorro)
        }
        else if(precio === 2){
            alert("USD 2500")
        }
        else{alert("Ingrese un valor válido")}
    
    }
    else if(menuPrincipal === 5){
        let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
        if(precio === 1){
            let conDescuento = descuento(500, 0.80)
            let ahorro = resta(500, 0.20)
            alert("USD"+" "+conDescuento+"\nAHORRAS USD "+ahorro)
        }
        else if(precio === 2){
            alert("USD 500")
        }
        else{alert("Ingrese un valor válido")}
    
    }
    else if(menuPrincipal === 6){
        alert("¡GRACIAS POR SU CONSULTA!")
        break
    }
    else{
        alert("Ingrese una opción válida")
    }
    i++    
}

//Funciones///

function descuento(a, b) {
    return a * b

}
function resta(a, b) {
    return a * b
}
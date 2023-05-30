let bienvenida = prompt("Ingrese su nombre")
alert("¡Hola" +" "+ bienvenida +"!")

let menuPrincipal = Number(prompt("Selecciona la marca de guitarra para ver su precio:\n1-Gibson\n2-Epiphone\n3-Cort\n4-Fender\n5-Stagg\n¡CON TARJETAS ITAÚ 20% DE DESCUENTO!"))
if(menuPrincipal === 1){
    let precio = Number(prompt("¿Tenes ITAÚ?\n1-SI\n2-NO"))
    if(precio === 1){
        let conDescuento = descuento(3500, 0.80)
        alert("USD"+" "+conDescuento)
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
        alert("USD"+" "+conDescuento)
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
        alert("USD"+" "+conDescuento)
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
        alert("USD"+" "+conDescuento)
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
        alert("USD"+" "+conDescuento)
    }
    else if(precio === 2){
        alert("USD 500")
    }
    else{alert("Ingrese un valor válido")}

}
else{
    alert("Ingrese una opción válida")
}

//Funciones///

function descuento(a, b) {
    return a * b

}

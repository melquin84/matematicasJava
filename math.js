const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado, 2);

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

const ladoTri1 = 6;
const ladoTri2 = 6;
const ladoTriBase = 4;
const alturaTri = 5.5;

const perimetroTriangulo = ladoTri1 + ladoTri2 + ladoTriBase;
const areaTriangulo = (ladoTriBase * alturaTri) / 2;

console.log({
    ladoTri1,
    ladoTri2,
    ladoCuadrado,
    alturaTri,
    perimetroTriangulo,
    areaTriangulo,
});



function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 3
const PI = Math.PI;

const circunferencia = diametroCirculo * PI;
const areaCirculo = Math.pow(radioCirculo, 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calulcarCirculo (radio) {
    const diametro = radio * Math.PI;

    return {
        circunferencia: Math.pow(radio, 2) * Math.PI,
        area: radio
    }
}

console.groupEnd('Circle')
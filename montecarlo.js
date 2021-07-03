

const randomNum = (limit_s,limit_i) => {
    return Math.random() * (limit_s-limit_i)+limit_i
}

const montecarlo = (pruebas) => {
    let sumatoria = 0
    let test = 0
    for (let i=1;i<=pruebas;i++){
        test = randomNum(3,2)
        sumatoria += 3 * Math.pow(test,2) + 2 * test
    }

    const resultado = sumatoria/pruebas

    return resultado
}

const simulacion = (tests) => {

    const montecarloTest = montecarlo(tests)

    const error = ((Math.abs(montecarloTest-24)/24)*100).toFixed(3)

    return {
        "exacta":24,
        "estimada":montecarloTest,
        "error":error+"%"
    }
}


module.exports = simulacion
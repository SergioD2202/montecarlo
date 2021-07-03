import { sendData } from "./post.js";

const doc = document.querySelector(".result")

const number = document.getElementById('tests');

const btn = document.querySelector(".send")


number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

btn.addEventListener('click', (e)=>{
    const num = number.value

    if(num == undefined || num == 0 || num == "") {
        alert("por favor ingrese un número válido")
        return
    }

    requesting(num)
})


const requesting = async (tests) => {
    try {
        const data = await sendData("/simulacion",JSON.stringify({"tests":tests}))

        const json = JSON.parse(data)

        doc.innerHTML = `El valor exacto de la integral es ${json.exacta}, el valor estimado es ${json.estimada} con un margen de error de ${json.error}`
    } catch (error) { 
        console.error(error)
    }
}


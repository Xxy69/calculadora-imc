let result = document.querySelector('#res');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');

let calcIMC = () =>{
   
    if (altura.value !== '' && peso.value !== '') {
        let imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5){
        classification = "abaixo do peso"
        }
        else if (imc < 25){
            classification = "peso ideal"
        }
        else if (imc < 30){
            classification = "acima do peso"
          }
          else if (imc < 35){
            classification = "obesidade nivel 1"
        }
        else if (imc < 40){
            classification = "obesidade nivel 2"
        }
        else{
            classification = "obesidade nivel 3"
        }

        res.innerHTML = `IMC: ${imc} (${classification})`
        }else  {
            res.innerHTML = 'preencha os campos'
        }
}


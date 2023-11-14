
        function calculo() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var operacao = document.getElementById('operacao').value;
            var resultadoElement = document.getElementById('resultado');

            var resultado = 0;
            switch (operacao) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        alert("Não pode se dividir número por zero");
                        return;
                    }
                    break;
            }
            
            
            resultadoElement.value = resultado;
        }
        function Calc10e100(){
            let a = 10;
            let b = 100;
            let somar = 100 + 10;
            let sub = 100 - 10;
            let div = 100 / 10;
            let multiplicar = 100 * 10;
            alert(`A soma de 100 e 10 é: ${somar} \n A Subtração de 100 e 10 é: ${sub} \n A Divisão de 100 e 10 é: ${div} \n A Multiplicação de 100 e 10 é ${multiplicar}`)
      }
      function loop10a100() {
        var lista = "";
        for (let index = 10; index <= 100; index++) {
          if (index != 100) {
            lista += index + ", ";
          }
          else if(index == 100){
            lista += index + ".";
          }


        }
        alert(lista)
      }
      function tabuada5(){
        const a = 5;
        var tabuada = "";
        for(let i = 1; i <= 10; i++){
            tabuada += `5 X ${i} = ${a * i} \n`;
        }
        alert(tabuada)
      }
      function tabuadaex4(){
        var numEx4 = parseFloat(document.getElementById('numEx4').value);
        var tabuadaEx4 = "";
        for(let i = 1; i <= 10; i++){
            tabuadaEx4 += `${numEx4} x ${i} = ${numEx4 * i} \n`;
        }
        alert(tabuadaEx4)
      }
      function NumerosPares() {
        let a = [1,2,3,4,5,6,7,8,9,10]
        var par = "";
        a.forEach(num => {

          if(num % 2 == 0){
            par += num + " "
          }
        });
        alert(par)
      }
      function calcValorCarro() {
        var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
        var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
        var percImpostos = parseFloat(document.getElementById('percImpostos').value);
        
        var valorFinal = 0;

        if (percImpostos <= 100 && percDistribuidor <= 100 && percImpostos >= 0 && percDistribuidor >= 0) {
            valorFinal = custoFabrica + (custoFabrica * (percImpostos / 100) + (custoFabrica * (percDistribuidor / 100)));
            document.getElementById('valorFinal').value = valorFinal;
        } else {
            alert("A porcentagem inserida está incorreta");
        }
    }

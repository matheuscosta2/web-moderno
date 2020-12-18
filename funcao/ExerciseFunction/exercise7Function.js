/*07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmoque os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”*/

function bhaskara(ax2, bx, c) {
    delta = Math.pow(bx, 2) - 4 * ax2 * c;
    sqrt = Math.sqrt(delta);
    divisor = ax2 * 2;
    bhaskar1 = (-bx + sqrt) / divisor;
    bhaskar2 = (-bx - sqrt) / divisor;
    resultBhaskar1 = Math.floor(bhaskar1);
    resultBhaskar2 = Math.floor(bhaskar2);
    if (delta > 0) {
        resultBhaskar = [bhaskar1, bhaskar2];
        console.log(resultBhaskar);
    } else if ((delta = 0)) {
        console.log(resultBhaskar);
    } else {
        console.log("Delta é negativo");
    }
}

bhaskara(2, -16, -18);

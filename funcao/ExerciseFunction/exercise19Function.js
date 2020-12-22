/*19)​O cardápio de uma lanchonete é o seguinte:CódigoDescrição do ProdutoPreço100Cachorro QuenteR$ 3,00200Hambúrguer SimplesR$ 4,00300CheeseburguerR$ 5,50400BauruR$ 7,50500RefrigeranteR$ 3,50600SucoR$ 2,80Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use ocomando switch. Crie um caso default para produto não existente*/

const menu = (idProd, amount) => {
    switch(idProd) {
        case 100:
            console.log('R$' + amount * 3)
        break;
        case 200:
            console.log('R$' + amount * 4)
        break;
        case 300:
            console.log('R$' + amount * 5.5)
        break;
        case 400:
            console.log('R$' + amount * 7.5)
        break;
        case 500:
            console.log('R$' + amount * 3.5)
        break;
        case 600:
            console.log('R$' + amount * 2.8)
        break;
        default:
            console.log('Invalid Id')
    }
}

menu(100, 3)
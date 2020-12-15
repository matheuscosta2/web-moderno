// Closure is the escope created when a function is declared
//Este escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'

function out() {
    const x = 'Local'
    function getIn(){
        return x
    }
    return getIn
}

const foo = out()
console.log(foo())
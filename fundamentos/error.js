function tratarErroELancar(erro) {
    throw new Error ('Error throw')
}


function printLoud(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { name: 'Matheus'}
printLoud(obj)
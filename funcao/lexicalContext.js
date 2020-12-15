const value = 'Global'

function Foo(){
    console.log(value)
}

function exec() {
    const value = 'Local'
    Foo()
}

exec()
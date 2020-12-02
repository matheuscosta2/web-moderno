console.log(Math.ceil(6.11))

const obj1 = {}
obj1.name = 'Foo'
//obj1['name'] = 'Bar'
console.log(obj1.name)

function Obj(name) {
    this.name = name
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('table')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
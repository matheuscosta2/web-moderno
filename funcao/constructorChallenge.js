const fooBar = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
        
    }
}

const foo1 = fooBar('Matheus')
foo1.speak()

function Barfoo(name) {
    this.name = name

    this.speak = function() {
        console.log(`My name is ${this.name}`)
    }
    
}

const bar1 = new Barfoo('Matheus')
bar1.speak()
class Foo {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Foo('João')
p1.speak()

const createBar = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}
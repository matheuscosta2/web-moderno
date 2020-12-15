function People() {
    this.age = 02
    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000)
}

new People
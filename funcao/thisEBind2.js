function People() {
    this.age = 05

    setInterval(function() {
        this.age++
        console.log(this.age)
    }, 1000)
}

new People

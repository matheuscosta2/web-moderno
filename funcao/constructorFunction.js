function Car(maxSpeed = 200, delta = 5) {
    //private atribute
    let currentSpeed = 0


    //public method
    this.run = function () {
        if (currentSpeed + delta <= maxSpeed){
            currentSpeed =+ delta
        } else{
            currentSpeed = maxSpeed
        }
}

    //public method
    this.getCurrentSpeed = function () {
        return currentSpeed
    }

}

const uno = new Car
uno.run()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.run()
console.log(ferrari.getCurrentSpeed())
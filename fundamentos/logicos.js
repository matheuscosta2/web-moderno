function buy(job1, job2) {
    const buyIcecream = job1 || job2
    const buyTv50 = job1 && job2
    //const buyTv32 = !!(job1 ^ job2) // bitwise xor
    const buyTv32 = job1 != job2
    const healthy = !buyIcecream

    return { buyIcecream, buyTv50, buyTv32, healthy }
}

console.log(buy(true, true))
console.log(buy(true, false))
console.log(buy(false, true))
console.log(buy(false, false))
function verifyLeapYear(leapYear) {
    if (leapYear % 400 == 0) {
        return true
    }else if (leapYear % 100 == 0){
        return false
    }else if ( leapYear % 4 == 0) {
        return true
    }else {
        return false
    }
}

console.log(verifyLeapYear(4))
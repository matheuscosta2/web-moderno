let compareWithThis = function(param) {
    console.log(this === param)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global)
compareWithThis(obj)

let compareWithThis = param => console.log(this === param)
compareWithThis(global)
compareWithThis(this)
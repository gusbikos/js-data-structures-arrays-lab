const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) { 
    drivers.push('Ralph')
}

function destructivelyPrependDriver(name) { 
    drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver () {
    drivers.pop()
}

function destructivelyRemoveFirstDriver () { 
    drivers.shift()
}

function appendDriver(name) {
    return [...drivers, "Broom"]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver(name)  { 
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver () {
    drivers.slice(1)
}
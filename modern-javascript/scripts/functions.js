// Cenário 1 - this em uma função normal

export default function sum(a, b) {
    console.log(this)
    console.log(arguments)
    return a + b
}


interface Something {
    a: Object
}

const t = (value: number): Something => {
    return {
        a: {value}
    }
}
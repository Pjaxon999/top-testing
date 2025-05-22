const calculator = {
    add: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") return "numbers only!"
        else return a + b;
    },
    subtract: (a, b) => { 
        if (typeof a !== "number" || typeof b !== "number") return "numbers only!"
        else return a - b;
    },
    divide: (a, b) => { 
        if (typeof a !== "number" || typeof b !== "number") return "numbers only!"
        else return a / b;
    },
    multiply: (a, b) => { 
        if (typeof a !== "number" || typeof b !== "number") return "numbers only!"
        else return a * b;
    }
}

export default calculator;
export default function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export function reverseString(input){
    return input.split("").reverse().join("");
}

export function calculator() {
    return {
        add(num1,num2) {
            return num1+num2;
        },
        subtract(num1,num2){
            return num1-num2;
        },
        multiply(num1,num2){
            return num1*num2;
        },
        divide(num1,num2){
            return num1/num2;
        }
    }
}

export function CaesarCipher(string){
    let value = string.split("").map(shift);
    return value.join("");
}

function shift(character){
    if(character.match(/[a-z]/i)){
        if(character === 'z') return 'a';
        else if (character === 'Z') return 'A';
        else return String.fromCharCode(character.charCodeAt(0) + 1);
    }
    return character;
}

export function analyzeArray(arr){
    let a = 0;
    if(arr.length > 0){
        let sum = arr.reduce((partial, b) => partial + b, 0);
        a = sum / arr.length;
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return {
        average: a,
        min: min,
        max: max,
        length: arr.length
    }
}
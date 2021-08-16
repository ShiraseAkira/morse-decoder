const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    result = '';
    for (let i = 0; i < expr.length; i += 10){
        const charExpr = expr.slice(i, i + 10);
        let charMorse = '';
        if (charExpr[0] === '*') {
            result += ' ';
            continue;
        }

        for (let j = 0; j < charExpr.length; j += 2) {
            if (charExpr[j] === '0') {
                continue;
            } else if (charExpr[j + 1] === '0') {
                charMorse += '.';
            } else {
                charMorse += '-';
            }
        }

        result += MORSE_TABLE[charMorse];
    }

    return result;
}

module.exports = {
    decode
}
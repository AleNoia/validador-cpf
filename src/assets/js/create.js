function create() {

    // ==================== RETURNS A STRING WITH ONLY NUMBERS 
    const cleanCpf = cpf => cpf.replace(/\D+/g, '');

    // ==================== RETURN A ARRAY 
    const arrayCpf = cpf => Array.from(cleanCpf(cpf))

    // ==================== CPF PART TO CALCULATE 
    const parcialCpf = cpf => cpf.slice(0, -2)

    // ==================== DIGIT
    function digit(cpf, secondDigit, firstDigit) {
        const array = arrayCpf(cpf)

        let parcial = parcialCpf(array)
        let regressive = parcial.length + 1;
        
        if(secondDigit){
            const secondDigitString = parcial + ',' + firstDigit
            const secondDigitArr = secondDigitString.split(',')
            parcial = secondDigitArr
            regressive = parcial.length + 1;
        }

        
        let total = parcial.reduce((ac, val) => {
            ac += (regressive * val)
            regressive--;
            return ac
        }, 0)
        
        
        const digit = 11 - (total % 11)
        let digitResult = digit > 9 ? 0 : digit;
        return digitResult 
    }

    // ==================== RETURNING FUNCTIONS 
    return {
        arrayCpf,
        parcialCpf,
        cleanCpf,
        digit,
    }

}

export default create;
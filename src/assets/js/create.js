function create(){

    // ==================== RETURNS A STRING WITH ONLY NUMBERS 
    const cleanCpf = cpf => cpf.replace(/\D+/g, '');
    
    // ==================== RETURN A ARRAY 
    const arrayCpf = cpf =>  Array.from(cleanCpf(cpf))

    // ==================== CPF PART TO CALCULATE 
    const parcialCpf = cpf =>  cpf.slice(0, -2)

    // ==================== FIRST DIGIT
    function firstDigit(cpf){

        const array = arrayCpf(cpf)   
        const parcial = parcialCpf(array)
        let regressive = parcial.length + 1;
        
        if(typeof array === 'undefined') return false 
        if(array.length !== 11) return false 

        let total = array.reduce((ac, val) => {
            ac += (regressive * val)
            regressive--;
            return ac
        }, 0)

        const digit = 11 - (total % 11)
        return digit > 9 ? 0 : digit;
    }

    // ==================== RETURNING FUNCTIONS 
    return {
        parcialCpf,
        arrayCpf,
        firstDigit
    }

}

export default create;
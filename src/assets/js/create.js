function create(){

    // ==================== RETURNS A STRING WITH ONLY NUMBERS 
    const cleanCpf = cpf => cpf.replace(/\D+/g, '');
    
    // ==================== RETURN A ARRAY 
    const arrayCpf = cpf =>  Array.from(cleanCpf(cpf))

    // ==================== RETURNING FUNCTIONS 
    return {
        cleanCpf,
        arrayCpf
    }

}

export default create;
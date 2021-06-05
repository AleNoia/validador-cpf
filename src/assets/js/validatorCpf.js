import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== [START APP]
    function start() {
        isValid('705.484.450-52');
        isValid('370.250.620-81');
        isValid('070.987.720-03');
        isValid('000.000.000-00');
    }

    // ======================================== [VALIDATE]
    function validate(cpf) {
        const array = create.arrayCpf(cpf)
        const parcial = create.parcialCpf(array)
        const cleanCpf = create.cleanCpf(cpf)
        
        if (typeof array === 'undefined') return false
        if (array.length !== 11) return false
        
        const firstDigit = create.digit(cpf, false)
        const secondDigt = create.digit(cpf, true, firstDigit)
        console.log('First digit resultant:', firstDigit)
        console.log('Second digt resultant:', secondDigt)

        parcial.push(String(firstDigit), String(secondDigt))
        const compare = parcial.join('') 

        if(cleanCpf !== compare) return false

        return true
    }


    // ======================================== [CHECK IF CPF IS VALID]
    function isValid(cpf) {
        if (validate(cpf)) {
            console.log('Cpf:', cpf)
            console.log('RESULT: Its valid')
            console.log('==================================')
        } else {
            console.log('Cpf:', cpf)
            console.log("RESULT: It is not valid")
            console.log('==================================')
        }
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }

}

export default validatorCpf;
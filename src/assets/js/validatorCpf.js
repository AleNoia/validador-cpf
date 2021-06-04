import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== [START APP]
    function start() {
        validate('605.930.303-03');
    }

    // ======================================== [VALIDATE]
    function validate(cpf) {
        
        const firstDigit = create.firstDigit(cpf)
        console.log(firstDigit)
        
        return true
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }

}

export default validatorCpf;
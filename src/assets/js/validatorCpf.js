import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== [START APP]
    function start() {
        validate('816.927.190-84');
    }

    // ======================================== [VALIDATE]
    function validate(cpf) {
        
        const firstDigit = create.digit(cpf)
        console.log('[firstDigit]', firstDigit)
        return true
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }

}

export default validatorCpf;
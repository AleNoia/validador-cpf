import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== [START APP]
    function start() {
        validate('81692719084');
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
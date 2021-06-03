import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== [START APP]
    function start() {
        validator('374.103.450-98');
    }

    // ======================================== [VALIDATOR]
    function validator(cpf) {
        const arrayCpf = create.arrayCpf(cpf)   

        if(typeof arrayCpf === 'undefined') return false 
        if(arrayCpf.length !== 11) return false 

        console.log(arrayCpf)
        return true
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }

}

export default validatorCpf;
import validatorCpf from './validatorCpf'

const app = validatorCpf()

try{
    app.start();
}catch(e){
    console.log('[error] Uncaught error!')
    console.log(e)
}
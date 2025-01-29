import Form from './Form'

function Login(){
    return(
        <div className='flex justify-center'>
            <Form route='/commentapi/token/' method='login'/>
        
        </div>
    )
}

export default Login
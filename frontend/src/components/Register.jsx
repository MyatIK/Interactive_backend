import Form from './Form';

function Register(){
    return(
        <div className='flex justify-center'>
            <Form route="/commentapi/user/register/" method='register'/>
        
        </div>

    )
}

export default Register
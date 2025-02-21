
import Login from '../components/Login';
import {render,screen} from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';

describe('Login',()=>{
    it('renders the Login component', ()=>{
        render(
            <BrowserRouter>
                <Login/>
            
            </BrowserRouter>
        );
        
    });
    
});


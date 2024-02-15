import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div className='container mx-auto my-auto'>
            <div className='col-md-10 mx-auto row my-auto'>
                <div className='col-12 col-md-10'>
                    <h1 className='text-primry w-75'>Personalize your Diet Website Plan!</h1>
                    <p className='fs-28 text-light inter-regular w-75'>Let’s get to know you better so we can create the perfect plan for you!</p>
                    <div className="col-sm-3 col-md-2 mt-5 pt-5">
                        <Link to="/Stepper">
                            <button className='btn btn-primry w-100 mt-5'  >Proceed <EastIcon className='fs-1' color="#fffff" /> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

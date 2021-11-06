import React from 'react'
import Cour from './cour'
import Footer from './footer'
import Nav from './nav'
import ON from './on'
import One from './one'

const Middle = () => {
    return (
        <div>
    <h4 className="text-center m-2 text-danger ">Ecommerce poseidon</h4>
    <Cour/>
    <ON/>
    <One/>
    
    <div>
   
    
    </div>
    <div  className="container ui" >
    <div  className="container mt-4 text-center" >
    
    
     <hr/>
     </div>
    <div className="container mt-5 text-center ii">
    </div>
    <Footer/>
    </div> 
        </div>
    )
}

export default Middle

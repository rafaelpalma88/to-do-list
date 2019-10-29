import React from 'react';
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

export default props => (
    <div>
        <main role="main">                    
            <div className="container" style={{'marginTop': '100px'}}>        
                
                <div className="row">                            
                    <ToDoForm />     
                </div>

                <div className="row" style={{'marginTop': '100px'}}>    
                    <ToDoList />                           
                </div>                          
                                
            </div> 
        </main> 
    </div>
)

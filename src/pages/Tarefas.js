import React, {Component} from 'react';
import axios from 'axios';
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

export default class Tarefas extends Component {

    constructor(props) {
        super(props);
    }    

    render(){
        return (
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
    }    
}


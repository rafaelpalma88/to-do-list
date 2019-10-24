import React, {Component} from 'react';
import axios from 'axios';

import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

const URL = 'http://localhost:3003/api/todos'

export default class Tarefas extends Component {

    constructor(props) {
        super(props);

        this.state = { description: '', list: [] };
        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }    

    adicionaTarefa(event) {
        /*this.setState({value: event.target.value});*/
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then((resp) => this.setState({...this.state, description: '', list: resp.data }))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    handleAdd(e) {
        e.preventDefault();
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())
    }

    handleRemove(item) {
        console.log(item);
        axios.delete(`${URL}/${item._id}`)
            .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <main role="main">                    
                    <div className="container" style={{'marginTop': '100px'}}>        
                        <div className="row">
                            
                            <ToDoForm 
                                description={this.state.description}
                                handleAdd={this.handleAdd} 
                                handleChange={this.handleChange}
                                />                            
                          
                        </div>
                        <div className="row" style={{'marginTop': '100px'}}>
    
                            <ToDoList 
                                list={this.state.list} 
                                handleRemove={this.handleRemove}
                                />
                           
                        </div>                        
                    </div> 
                </main> 
            </div>
        )
    }
    
}
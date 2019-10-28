import React, {Component} from 'react';
import axios from 'axios';
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

//const URL = 'http://localhost:3003/api/todos'

export default class Tarefas extends Component {

    constructor(props) {
        super(props);

        //this.state = { description: '', list: [] };        
        //this.handleAdd = this.handleAdd.bind(this);
        //this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        //this.refresh();
        
    }    

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/ig` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({...this.state, description, list: resp.data }))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    

    handleAdd(e) {
        console.log('oi')
        e.preventDefault();
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())
    }


    handleSearch(e) {
        e.preventDefault();
        this.refresh(this.state.description)
    }

    handleClear(e) {
        e.preventDefault();
        this.refresh()
    }


    handleRemove(item) {
        console.log(item);
        axios.delete(`${URL}/${item._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(item) {        
        axios.put(`${URL}/${item._id}`, { ...item, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(item) {
        axios.put(`${URL}/${item._id}`, { ...item, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    render(){
        return (
            <div>
                <main role="main">                    
                    <div className="container" style={{'marginTop': '100px'}}>        
                        
                        
                        <div style={{'padding': '40px'}}>
                            {/*<TesteRedux />*/}
                        </div>
                        
                        
                        <div className="row">
                            
                            <ToDoForm 
                                //description={this.state.description}
                                //handleAdd={this.handleAdd} 
                                //handleSearch={this.handleSearch} 
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
                                />                            
                          
                        </div>
                        <div className="row" style={{'marginTop': '100px'}}>
    
                            <ToDoList 
                                //list={this.state.list} 
                                //handleRemove={this.handleRemove}
                                //handleMarkAsDone={this.handleMarkAsDone}
                                //handleMarkAsPending={this.handleMarkAsPending}                                
                                />
                           
                        </div>  


                        
                                        
                    </div> 
                </main> 
            </div>
        )
    }
    
}


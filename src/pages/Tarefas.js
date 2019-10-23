import React, {Component} from 'react';

export default class Tarefas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tarefas: ['tarefa1','tarefa2','tarefa3','tarefa4']
        
        };
    }

    render(){
        return (
            <div>
                <main role="main">                    
                    <div className="container" style={{'marginTop': '100px'}}>        
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Adicione uma tarefa</h2>
                                
                                <form>
                                    <input type="text" placeholder="Search" style={{'width': '70%'}} />
                                    <button type="submit" onClick={() => alert('oi')}>Pesquisar</button>
                                </form>
    
                            </div>
                        </div>
                        <div className="row" style={{'marginTop': '100px'}}>
    
                            <div className="col-md-12">
                                <h2>Descrição</h2>
                                
                                <ul>
                                    {this.state.tarefas.map((tarefa) => <li>{ tarefa }</li>)}
                                </ul>
    
    
                            </div>
                        </div>                        
                    </div> 
                </main> 
            </div>
        )
    }
    
}
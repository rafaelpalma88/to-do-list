import React from 'react';

const tarefas = ['tarefa1','tarefa2','tarefa3','tarefa4']

function Tarefas() {
    return (
        <div>
            <main role="main">                    
                <div className="container" style={{'marginTop': '100px'}}>        
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Adicione uma tarefa</h2>
                            
                            <form>
                                <input type="text" placeholder="Search" style={{'width': '70%'}}/>
                                <button type="submit">Pesquisar</button>
                            </form>

                        </div>
                    </div>
                    <div className="row" style={{'marginTop': '100px'}}>

                        <div className="col-md-12">
                            <h2>Descrição</h2>
                            
                            <ul>
                                {tarefas.map((tarefa) => <li>{ tarefa }</li>)}
                            </ul>


                        </div>

                        {/*<div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>*/}
                    </div>
                    <hr />
                </div> 
            </main> 
        </div>
    )
}
export default Tarefas;
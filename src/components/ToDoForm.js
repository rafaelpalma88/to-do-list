import React, {Component} from 'react';

export default props => (          
   
    <div className="col-md-12">
    <h2>Adicione uma tarefa</h2>

    <form>
        <input type="text" 
            placeholder="Adicione uma tarefa" 
            onChange={props.handleChange}
            value={props.description} 
            style={{'width': '70%'}} />
        <input type="submit" onClick={props.handleAdd} value="Pesquisar" />
    </form>

    </div>
)
    

import React from 'react';

export default props => {

    const keyHandler = (e) => {
        if(e.shiftKey) {
            if (e.key === 'Enter') {
                e.shiftKey ? props.handleSearch() : props.handleAdd()           
            } else if (e.key === 'Escape') {
                props.handleClear()
            }
        }
         
        
    }
    
    return (
        <div className="col-md-12">

            <h2>Adicione uma tarefa</h2>

            <form>
                <input type="text" 
                    placeholder="Adicione uma tarefa" 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} 
                    style={{'width': '70%'}} />
                <input type="submit" onClick={props.handleAdd} value="Adicionar" />

                <input type="submit" onClick={props.handleSearch} value="Pesquisar" />

                <input type="submit" onClick={props.handleClear} value="Limpar" />
            </form>

        </div>
    )  
    
}
    

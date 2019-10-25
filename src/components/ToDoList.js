import React from 'react';

export default props => {

    return(
        <div className="col-md-12">
        <h2>Descrição</h2>

            <div>
                {props.list.map((item) => 
                    <div key={item._id}>                    
                        <p>
                            <span className={ item.done ? 'markedAsDone' : ''}> { item.description } </span>                             
                            <a onClick={() => props.handleRemove(item)}> || Excluir || </a>
                            <a onClick={() => props.handleMarkAsDone(item)} style={{ display: item.done? 'none' : 'inline-block' }}> Marcar com feito || </a>
                            <a onClick={() => props.handleMarkAsPending(item)}  style={{ display: item.done? 'inline-block' : 'none' }}> Voltar para nao feito</a>
                        </p>                      
                    </div>
                )}                
            </div>

        </div>
    )

}








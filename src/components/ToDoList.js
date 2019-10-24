import React from 'react';

export default props => {

    return(
        <div className="col-md-12">
        <h2>Descrição</h2>

            <div>
                {props.list.map((item) => 
                    <div key={item._id}>                    
                        <p>
                            { item.description }
                            <a onClick={() => props.handleRemove(item)}> Excluir</a>
                        </p>
                    </div>
                )}                
            </div>

        </div>
    )

}








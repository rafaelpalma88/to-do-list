import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './TodoActions'

const TodoList = props => {

    return(
        <div className="col-md-12">
        <h2>Descrição</h2>

            <div>                
                {props.list.map((item) => 
                    <div key={item._id}>                    
                        <p>
                            <span className={ item.done ? 'markedAsDone' : ''}> { item.description } </span>                             
                            <span onClick={() => props.remove(item)}> || Excluir || </span>
                            <span onClick={() => props.markAsDone(item)} style={{ display: item.done? 'none' : 'inline-block' }}> Marcar com feito || </span>
                            <span onClick={() => props.markAsPending(item)}  style={{ display: item.done? 'inline-block' : 'none' }}> Voltar para nao feito</span>
                        </p>                      
                </div>
                )}    
            </div>

        </div>
    )

}

const mapStateToProps = state => ({ list: state.items.list });
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);







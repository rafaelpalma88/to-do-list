import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear} from './TodoActions'

class TodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
                   
        if (e.key === 'Enter') {                
            e.shiftKey ? search() : add(description)           
        } else if (e.key === 'Escape') {                
            clear()
        }
        
    }

    render() {
        const { add, search, description } = this.props

        return(
            <div className="col-md-12">

                <h2>Adicione uma tarefa</h2>

                
                    <input type="text" 
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} 
                        style={{'width': '70%'}} />
                    <input type="submit" onClick={() => add(description)} value="Adicionar" />

                    <input type="submit" onClick={() => search()} value="Pesquisar" />

                    <input type="submit" onClick={this.props.clear} value="Limpar" />
                

            </div>
        )
    }
}
    
const mapStateToProps = state => ({ description: state.items.description });
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
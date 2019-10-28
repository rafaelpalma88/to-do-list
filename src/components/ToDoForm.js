import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './TodoActions'

class TodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler = (e) => {
        if(e.shiftKey) {
            if (e.key === 'Enter') {
                e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()           
            } else if (e.key === 'Escape') {
                this.props.handleClear()
            }
        }  
    }

    render() {
        return(
            <div className="col-md-12">

                <h2>Adicione uma tarefa</h2>

                <form>
                    <input type="text" 
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} 
                        style={{'width': '70%'}} />
                    <input type="submit" onClick={this.props.handleAdd} value="Adicionar" />

                    <input type="submit" onClick={this.props.handleSearch} value="Pesquisar" />

                    <input type="submit" onClick={this.props.handleClear} value="Limpar" />
                </form>

            </div>
        )
    }
}
    
const mapStateToProps = state => ({ description: state.items.description });
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
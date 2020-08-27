import React from 'react';
import '../css/App1.css';
import '../css/App2.css';
import Recipe from './Recipe';
import {stylo2, stylo3} from './Stylo';
import {egg} from './Easter';

class Main extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        inp1 : '', inp2 : '', inp3 : '',
        url : '', refresh : true, unlock: true,
      }
      this.lockButton=this.lockButton.bind(this)
    }

    // Button pressed
    clicked = () => {
        if(this.state.unlock) {
            let url = "/recp?ing1=" + this.state.inp1 + "&ing2=" + this.state.inp2 + "&ing3=" + this.state.inp3;
            this.setState({url : url, inp1 : '', inp2 : '', inp3 : '', refresh : !this.state.refresh});
        }
    }

    // Search on Enter
    keydownHandler = (e) => {
        if(e.keyCode===13) {this.clicked()}
    }
    componentDidMount(){
        document.addEventListener('keydown',this.keydownHandler);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',this.keydownHandler);
    }

    // Handle ingredients
    handleUserInput = (e) => {
        const name = e.target.name;
        var value = e.target.value.toLowerCase();
        if (value.length > 15) {
        value = value.substr(0, 15);
        }
        this.setState({[name]: value});
        if (this.state.inp1==='') {this.setState({inp3: '', inp2: ''})};
        if (this.state.inp2==='') {this.setState({inp3: ''})};
    }

    lockButton(t) {
        this.setState({unlock: t});
    }

    //----------------------------------------------------------------------------------------------------------------------------------------------
    //-------R-E-N-D-E-R-I-N-G-!-!-!----------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------

    render() {
        egg(this.state.inp1, this.state.inp2, this.state.inp3)
        return (
            <div>
                {/* Рецепт */}
                <Recipe url = {this.state.url} refresh = {this.state.refresh} lockButton={this.lockButton} />
        
                <div class="row"> 
        
                    {/* Кнопка */}
                    <div class="col-lg-3 col-12" >
                        <button class="btn btn-outline-secondary " type="button" onClick={this.clicked}>Search recipe</button>
                    </div>
        
                    {/* Поле ввода 1 */}
                    <div class="col-lg-3 col-12">
                        <input name="inp1" type="text" class="form-control elem" placeholder="Add ingredient"
                        value={this.state.inp1}
                        onChange={this.handleUserInput} 
                        />
                    </div>
                
                    {/* Поле ввода 2 */}
                    <div class={stylo2(this.state.inp1)}>
                        <input name="inp2" type="text" class="form-control" placeholder="Add ingredient"
                        value={this.state.inp2}
                        onChange={this.handleUserInput} 
                        />
                    </div>
        
                    {/* Поле ввода 3 */}
                    <div class={stylo3(this.state.inp1, this.state.inp2)}>
                        <input name="inp3" type="text" class="form-control" placeholder="Add ingredient"
                        value={this.state.inp3}
                        onChange={this.handleUserInput} 
                        />
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Main;
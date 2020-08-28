import React from 'react';
import logo from './logo.jpg';
import {StylesProvider} from '../Utility/StylesProvider';

class Search extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        input1: '',
        input2: '',
        input3: '',
      }
    }
    static contextType = StylesProvider;

    clicked = () => {
        if(this.context.unlockSearchButton) {
            let url = "ing1=" + this.state.inp1 + "&ing2=" + this.state.inp2 + "&ing3=" + this.state.inp3;
            this.setState({inp1 : '', inp2 : '', inp3 : ''});
            this.props.setIngredients(url);
            this.props.setFirst('');
        }
    }

    handleUserInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (value.length > 15) {
            value = value.substr(0, 15);
        }

        this.setState({[name]: value});
    }

    render() {
        var styles = this.context;
        var inp1 = this.state.input1;
        var inp2 = this.state.input2;
        var inp3 = this.state.input3;

        if (inp1==='' && (inp2 !== '' || inp3 !== '')) {
            this.setState({input1: inp2, input2: inp3, input3: ''});
            document.getElementsByName("input1")[0].blur();
        }

        if (inp2==='' && inp3 !== '') {
            this.setState({input2: inp3, input3: ''});
            document.getElementsByName("input2")[0].blur();
        }

        return(
            <div className="left-grid" style={styles.leftGrid}>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <img src={logo} alt="Logo" style={styles.logo} />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <div 
                        class="search-btn" 
                        onClick={this.clicked}
                    >
                        Search recipe
                    </div>
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Add ingredient" 
                        name="input1"
                        value={inp1}
                        onChange={this.handleUserInput} 
                    />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Add ingredient" 
                        name="input2"
                        value={inp2}
                        onChange={this.handleUserInput} 
                    />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Add ingredient" 
                        name="input3"
                        value={inp3}
                        onChange={this.handleUserInput} 
                    />
                </div>
            </div>
        )
    }
}

export default Search;
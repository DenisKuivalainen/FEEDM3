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
            let url = "ing1=" + this.state.input1 + "&ing2=" + this.state.input2 + "&ing3=" + this.state.input3;
            this.setState({input1 : '', input2 : '', input3 : ''});
            this.props.setIngredients(url);
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
        var input1 = this.state.input1;
        var input2 = this.state.input2;
        var input3 = this.state.input3;

        var inputFields = ["input1", "input2", "input3"]

        if (input1==='' && (input2 !== '' || input3 !== '')) {
            this.setState({input1: input2, input2: input3, input3: ''});
            document.getElementsByName("input1")[0].blur();
        }

        if (input2==='' && input3 !== '') {
            this.setState({input2: input3, input3: ''});
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
                {inputFields.map((val, k) => {
                    let activeCheck = eval("input" + (k > 0 ? k : 1)) !== '' || val === "input1";
                    return(
                        <div className="left-item-grid" key={k} style={styles.leftItemGrid}>
                            <input class="ing-input" placeholder="Add ingredient" 
                                name={val}
                                value={eval(val)}
                                onChange={this.handleUserInput} 
                                style={{opacity: activeCheck ? 1 : 0}}
                                disabled={activeCheck ? "" : "disabled"}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Search;
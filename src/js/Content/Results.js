import React from 'react';
import CardItem from './Box'
import {StylesProvider} from '../Utility/StylesProvider';

class Results extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;
    
    setSelectedRecipe = (selected) => {
        this.props.setSelectedRecipe(this.context.jsonData[selected]);
    }

    render() {
        var styles = this.context;
        return(
            <div className="right-grid" style={styles.rightGrid}>
                {styles.jsonData.map((val, k) => {
                    return(
                        <div className="right-item-grid" key={k} style={styles.rightItemGrid}>
                            <CardItem
                                styles={styles} 
                                recipe={val} 
                                searchNumber={k} 
                                setSelectedRecipe={this.setSelectedRecipe}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Results;
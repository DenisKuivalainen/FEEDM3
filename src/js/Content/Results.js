import React from 'react';
import CardItem from './Box'
import {StylesProvider} from '../Utility/StylesProvider';

class Results extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;

    render() {
        var styles = this.context;
        return(
            <div className="right-grid" style={styles.rightGrid}>
                {styles.jsonData.map((val, k) => {
                    return(
                        <div className="right-item-grid" key={k} style={styles.rightItemGrid}>
                                <CardItem styles={styles} recipe={val} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Results;
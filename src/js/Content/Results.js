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
                <div className="right-item-grid" style={styles.rightItemGrid}>
                    <CardItem styles={styles}/>
                </div>
                <div className="right-item-grid" style={styles.rightItemGrid}>
                    <CardItem styles={styles}/>
                </div>
                <div className="right-item-grid" style={styles.rightItemGrid}>
                    <CardItem styles={styles}/>
                </div>
            </div>
        )
    }
}

export default Results;
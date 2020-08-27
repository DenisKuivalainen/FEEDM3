import React from 'react';
import logo from './logo.jpg';
import {StylesProvider} from '../Utility/StylesProvider';

class Search extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;

    render() {
        var styles = this.context;
        return(
            <div className="left-grid" style={styles.leftGrid}>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <img src={logo} alt="Logo" style={styles.logo} />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <div class="search-btn" >
                        Search recipe
                    </div>
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Enter ingredient" />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Enter ingredient" />
                </div>
                <div className="left-item-grid" style={styles.leftItemGrid}>
                    <input class="ing-input" placeholder="Enter ingredient" />
                </div>
            </div>
        )
    }
}

export default Search;
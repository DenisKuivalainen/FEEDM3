import React from 'react';
import {StylesProvider} from '../Utility/StylesProvider';
import logo from './logo.jpg';

class BadBatch extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;

    renderButton() {
        if (!this.context.widthGreater) {
            return(
                <div 
                    className="search-btn" 
                    onClick={() => window.open('/download')}
                >
                    Download mobile APP
                </div>
            )
        }
    }

    getText() {
        if (this.context.widthGreater) {
            return(
                "Sorry, the browser window is too wide. Try to change the screen resolution."
            )
        } else {
            return(
                "Sorry, the browser window is too tall. Try to change the screen resolution,  or download Android Mobile APP."
            )
        }
    }

    render() {
        let styles = this.context;
        return(
            <div className="bad-batch-main" style={styles.badBatchMain}>
                <img src={logo} alt="Logo" style={styles.badBatchLogo} />
                <div className="bad-batch-text" style={styles.badBatchText}>
                    {this.getText()}
                </div>
                {this.renderButton()}
            </div>
        )
    }
}

export default BadBatch;
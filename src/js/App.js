import React from 'react';
import Main from './Main';
import '../css/App.css';
import {floorToTenHundreads as ftth} from './Utility/UtilityMethods';
import {StylesProvider} from './Utility/StylesProvider';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            vw: 0,
            vh: 0,
            rows: 0,
        }
    }

    getScreenParametors() {
        let vw = document.documentElement.clientWidth;
        let vh = document.documentElement.clientHeight;

    }

    calculateStyles() {
        let vw = this.state.vw;
        let vh = this.state.vh;
        let rows = this.state.rows;

        return {
            app: {
                overflow: "hidden",
                width: vw, 
                maxWidth: vw, 
                height: vh, 
                maxHeight: vh,
            },
            mainGrid: {
                width: vw, 
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
            },
            mainGridLeft: {
                flexGrow: 0,
                maxWidth: ftth(vw/3),
                flexBasis: ftth(vw/3),
                boxSizing: "border-box",
            },
            mainGridRight: {
                flexGrow: 0,
                maxWidth: ftth(vw*2/3),
                flexBasis: ftth(vw*2/3),
                boxSizing: "border-box",
            },
            leftGrid: {
                width: ftth(vw/3) - ftth(vh* 0.1), 
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                marginTop: ftth(vh* 0.065),
                marginLeft: ftth(vh* 0.05),
                marginRight: ftth(vh* 0.05),
            },
            rightGrid: {
                width: ftth(vw*2/3) - ftth(vh* 0.05), 
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                marginTop: ftth(vh* 0.05),
                marginRight: ftth(vh* 0.05),
            },
            leftItemGrid: {
                flexGrow: 0,
                maxWidth: ftth(vw/3) - ftth(vh* 0.1),
                flexBasis: ftth(vw/3) - ftth(vh* 0.1),
                boxSizing: "border-box",
                marginBottom: ftth(vh* 0.025),
            },
            rightItemGrid: {
                flexGrow: 0,
                maxWidth: ftth((ftth(vw*2/3) - ftth(vh* 0.05)) / 3),
                flexBasis: ftth((ftth(vw*2/3) - ftth(vh* 0.05)) / 3),
                boxSizing: "border-box",
                padding: ftth(vh * 0.015),
            },
            fullWidth: {
                flexGrow: 0,
                maxWidth: vw,
                width: vw,
                boxSizing: "border-box",
            },
            boxGrid: {
                flexGrow: 0,
                maxWidth: vw,
                flexBasis: vw,
                boxSizing: "border-box",
            },
            logo: {
                width: "100%", 
                marginBottom: ftth(vh* 0.075),
            },
            recipeBox: {
                width: ftth((ftth(vw*2/3) - ftth(vh* 0.05)) / 3) - ftth(vh * 0.03) - 20,
                height: ftth((vh - ftth(vh* 0.15)) / 3) - ftth(vh * 0.03) - 20
            }
        }
    }

    render() {
        return(
            <StylesProvider.Provider value={this.calculateStyles()}>
            <Main />
            </StylesProvider.Provider>
        )
    }
}

export default App;
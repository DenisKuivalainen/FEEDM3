import React from 'react';
import {floorToTenHundreads as ftth} from './UtilityMethods';

import logo from './logo.jpg';
import './App.css';

class App extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }

    render() {
        console.log(document.documentElement.clientWidth / document.documentElement.clientHeight)
        return (
                <div style={STYLES.app}>
                    <div className="main-grid" style={STYLES.mainGrid}>
                        <div className="main-grid-left" style={STYLES.mainGridLeft}>
                            <div className="left-grid" style={STYLES.leftGrid}>
                                <div className="left-item-grid" style={STYLES.leftItemGrid}>
                                    <img src={logo} alt="Logo" style={STYLES.logo} />
                                </div>
                                <div className="left-item-grid" style={STYLES.leftItemGrid}>
                                    <div class="search-btn" >
                                        Search recipe
                                    </div>
                                </div>
                                <div className="left-item-grid" style={STYLES.leftItemGrid}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </div>
                                <div className="left-item-grid" style={STYLES.leftItemGrid}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </div>
                                <div className="left-item-grid" style={STYLES.leftItemGrid}>
                                    <input class="ing-input" placeholder="Enter ingredient" />
                                </div>
                            </div>
                        </div>
                        <div className="main-grid-right" style={STYLES.mainGridRight}>
                            <div className="right-grid" style={STYLES.rightGrid}>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                                <div className="right-item-grid" style={STYLES.rightItemGrid}>
                                    <CardItem />
                                </div>
                            </div>
                        </div>
                        <div style={STYLES.fullWidthGrid}>
                            <div class="bottom-credentials">
                                <a href="https://github.com/DenisKuivalainen/softdevproj" class="bottom-text">2020   &#169;   Godlike</a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

const STYLES = {
    app: {
        overflow: "hidden",
        width: document.documentElement.clientWidth, 
        maxWidth: document.documentElement.clientWidth, 
        height: document.documentElement.clientHeight, 
        maxHeight: document.documentElement.clientHeight,
    },
    mainGrid: {
        width: document.documentElement.clientWidth, 
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
    },
    mainGridLeft: {
        flexGrow: 0,
        maxWidth: ftth(document.documentElement.clientWidth/3),
        flexBasis: ftth(document.documentElement.clientWidth/3),
        boxSizing: "border-box",
    },
    mainGridRight: {
        flexGrow: 0,
        maxWidth: ftth(document.documentElement.clientWidth*2/3),
        flexBasis: ftth(document.documentElement.clientWidth*2/3),
        boxSizing: "border-box",
    },
    leftGrid: {
        width: ftth(document.documentElement.clientWidth/3) - ftth(document.documentElement.clientHeight* 0.1), 
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        marginTop: ftth(document.documentElement.clientHeight* 0.065),
        marginLeft: ftth(document.documentElement.clientHeight* 0.05),
        marginRight: ftth(document.documentElement.clientHeight* 0.05),
    },
    rightGrid: {
        width: ftth(document.documentElement.clientWidth*2/3) - ftth(document.documentElement.clientHeight* 0.05), 
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        marginTop: ftth(document.documentElement.clientHeight* 0.05),
        marginRight: ftth(document.documentElement.clientHeight* 0.05),
    },
    leftItemGrid: {
        flexGrow: 0,
        maxWidth: ftth(document.documentElement.clientWidth/3) - ftth(document.documentElement.clientHeight* 0.1),
        flexBasis: ftth(document.documentElement.clientWidth/3) - ftth(document.documentElement.clientHeight* 0.1),
        boxSizing: "border-box",
        marginBottom: ftth(document.documentElement.clientHeight* 0.025),
    },
    rightItemGrid: {
        flexGrow: 0,
        maxWidth: ftth((ftth(document.documentElement.clientWidth*2/3) - ftth(document.documentElement.clientHeight* 0.05)) / 3),
        flexBasis: ftth((ftth(document.documentElement.clientWidth*2/3) - ftth(document.documentElement.clientHeight* 0.05)) / 3),
        boxSizing: "border-box",
        padding: ftth(document.documentElement.clientHeight * 0.015),
    },
    fullWidthGrid: {
        flexGrow: 0,
        maxWidth: document.documentElement.clientWidth,
        flexBasis: document.documentElement.clientWidth,
        boxSizing: "border-box",
    },
    boxGrid: {
        flexGrow: 0,
        maxWidth: document.documentElement.clientWidth,
        flexBasis: document.documentElement.clientWidth,
        boxSizing: "border-box",
    },
    logo: {
        width: "100%", 
        marginBottom: ftth(document.documentElement.clientHeight* 0.075),
    },
    recipeBox: {
        width: ftth((ftth(document.documentElement.clientWidth*2/3) - ftth(document.documentElement.clientHeight* 0.05)) / 3) - ftth(document.documentElement.clientHeight * 0.03) - 20,
        height: ftth((document.documentElement.clientHeight - ftth(document.documentElement.clientHeight* 0.15)) / 3) - ftth(document.documentElement.clientHeight * 0.03) - 20
    }
}

function CardItem() {
    return (
        <div class="recipe-box" style={STYLES.recipeBox} onClick={() => alert("Hello")}>
            Hellooo
        </div>
      );
}

export default App;
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
            rightK: 0,
            firstRecipe: 0,
            ammountOfPages: 0,

            widthGreater: false,
            unlockSearchButton: true,
            alreadyClicked: false,

            ingredients: '',
            selectedRecipeTop: '',
            selectedRecipeDis: '',
            selectedRecipePic: '',

            jsonData: [], 
        }
        this.getScreenParametors = this.getScreenParametors.bind(this);
    }

    setFirst = (first) => {
       if(first !== this.state.firstRecipe) { this.setState({firstRecipe: first});}
    }

    setSelectedRecipe = (selected) => {
        this.setState({
            selectedRecipeTop: selected["top"],
            selectedRecipeDis: selected["dis"],
            selectedRecipePic: selected["pic"],
        });
    }

    setIngredients = (ingredients) => {
        this.setState({
            ingredients: ingredients,
            firstRecipe: 0,
            alreadyClicked: true
        });
    }

    getScreenParametors() {
        let vw = document.documentElement.clientWidth;
        let vh = document.documentElement.clientHeight;

        let rows = this.getNumberOfRows(vw / vh);
        let rightK = this.calculateRightCoefficient(rows, vw, vh);
        let widthGreaterThanHeight = this.checkWidthAndHeight(vw, vh);
        let firstDevider = (rows !== 0 ? rows : 1) * 3;
        let first = Math.floor(this.state.firstRecipe / firstDevider) * firstDevider;
        
        this.setState({
            vw: vw,
            vh: vh,
            rightK: rightK,
            widthGreater: widthGreaterThanHeight,
        })

        if(rows !== this.state.rows || first !== this.state.firstRecipe) {
            this.setState({
                rows: rows,
                firstRecipe: first,
            })
        }
    }

    checkWidthAndHeight(vw, vh) {
        return vw > vh;
    }

    calculateRightCoefficient(rows, vw, vh) {
        switch (rows) {
            case 1:
                return 0.5;

            case 2:
                return 3 / 5;

            case 3:
                return 2 / 3;
        
            default:
                return 0;
        }
    }

    getNumberOfRows(k) {
        if(k >= 0.65 && k < 1.15) {
            return 1;
        } else if(k >= 1.15 && k < 1.5) {
            return 2;
        } else if(k >= 1.5 && k < 20/9) {
            return 3;
        }

        return 0;
    }

    calculateStyles() {
        let vw = this.state.vw;
        let vh = this.state.vh;
        let rows = this.state.rows;
        let rk = this.state.rightK;
        let lk = 1 - rk;
        let urlIsIdentified = this.state.ingredients !== '';

        let rg = (vh - (ftth((vh - ftth(vh* 0.15)))) - ftth(vh* 0.05)) / 2;

        return {
            rows: rows,
            widthGreater: this.state.widthGreater,
            jsonData: this.state.jsonData,
            selectedRecipe: {
                "top": this.state.selectedRecipeTop,
                "dis": this.state.selectedRecipeDis,
                "pic": this.state.selectedRecipePic
            },
            ingredients: this.state.ingredients,
            firstRecipe: this.state.firstRecipe,
            unlockSearchButton: this.state.unlockSearchButton,
            ammountOfPages: this.state.ammountOfPages,

            app: {
                visibility: vw > 0 ? "visible" : "hidden",
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
                maxWidth: urlIsIdentified ? ftth(vw*lk) : vw,
                flexBasis: urlIsIdentified ? ftth(vw*lk) : vw,
                boxSizing: "border-box",
            },
            mainGridRight: {
                flexGrow: 0,
                maxWidth: ftth(vw*rk),
                flexBasis: ftth(vw*rk),
                boxSizing: "border-box",
            },
            leftGrid: {
                width: ftth(vw*lk) - ftth(vw*0.1), 
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                marginTop: ftth(vh* 0.065),
                marginLeft: urlIsIdentified ? ftth(vh* 0.05) : ftth(vw*rk/2) + ftth(vh* 0.05),
                marginRight: urlIsIdentified ? ftth(vh* 0.05) : ftth(vw*rk/2) + ftth(vh* 0.05),
            },
            rightGrid: {
                visibility: urlIsIdentified ? "visible" : "hidden",
                width: ftth(vw*rk) - ftth(vh* 0.05), 
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
                marginTop: ftth(vh* 0.05),
                marginRight: ftth(vh* 0.05),
            },
            leftItemGrid: {
                flexGrow: 0,
                maxWidth: ftth(vw*lk) - ftth(vw*0.1), 
                flexBasis: ftth(vw*lk) - ftth(vw*0.1), 
                boxSizing: "border-box",
                marginBottom: ftth(vh* 0.025),
            },
            rightItemGrid: {
                flexGrow: 0,
                maxWidth: ftth((ftth(vw*rk) - ftth(vh* 0.05)) / rows),
                flexBasis: ftth((ftth(vw*rk) - ftth(vh* 0.05)) / rows),
                boxSizing: "border-box",
                padding: ftth(vh * 0.015),
            },
            fullWidth: {
                flexGrow: 0,
                maxWidth: vw,
                width: vw,
                height: rg,
                boxSizing: "border-box",
                bottom: 0,
                paddingTop: rg * 0.5,
                fontSize: rg * 0.4,
            },
            pageSwitchButtons: {
                height: rg,
                boxSizing: "border-box",
                bottom: rg,
                padding: 5,
                display: "flex", 
                justifyContent: "flex-end",
            },
            pageSwitchButton: {
                flexGrow: 0,
                width: rg - 20,
                height: rg - 20,
                fontSize: rg - 20,
                marginRight: ftth(vh* 0.05),
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
                width: ftth((ftth(vw*rk) - ftth(vh* 0.05)) / rows) - ftth(vh * 0.03) - 20,
                height: ftth((vh - ftth(vh* 0.15)) / 3) - ftth(vh * 0.03) - 20
            },
            recipeImage: {
                width: ftth((ftth(vw*rk) - ftth(vh* 0.05)) / rows) - ftth(vh * 0.03) - 20,
                height: (ftth((vh - ftth(vh* 0.15)) / 3) - ftth(vh * 0.03) - 40) /2
            },
            badBatchMain: {
                marginLeft:  vw * 0.2,
                marginRight: vw * 0.2,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: vw * 0.6,
            },
            badBatchText: {
                marginBottom: vw * 0.05,
            },
            badBatchLogo: {
                width: vw * 0.5,
                marginLeft: vw * 0.05,
                marginRight: vw * 0.05,
                marginBottom: vw * 0.05,
            },
            recipeMain: {
                marginTop: ftth(vh* 0.05),
                marginLeft: ftth(vh* 0.05),
                marginRight: ftth(vh* 0.05),
                width: ftth(vw - vh*0.1),
                height: vh-rg
            },
            recipeBorder: {
                width: ftth(vw - vh*0.1),
                height: ftth((vh-rg*3)),
            },
            recipePic: {
                marginTop: ftth(vh* 0.05),
                marginLeft: ftth(vh* 0.05),
                width: ftth(vw - vh*0.1) - ftth(vh* 0.1),
                height: ftth((ftth(vh-rg*3) - ftth(vh* 0.1)) * 0.3),
            },
            recipeName: {
                marginTop: ftth(vh* 0.05),
                marginLeft: ftth(vh* 0.05),
                width: ftth(vw - vh*0.1) - ftth(vh* 0.1),
                fontSize: ftth((ftth(vh-rg*3) - ftth(vh* 0.1)) * 0.07),
            },
            recipeDesc: {
                marginTop: ftth(vh* 0.03),
                marginLeft: ftth(vh* 0.07),
                width: ftth(vw - vh*0.1) - ftth(vh* 0.14),
                fontSize: ftth((ftth((vh-rg*3)) - ftth(vh* 0.08) - (ftth((ftth(vh-rg*3) - ftth(vh* 0.1)) * 0.07) + ftth(vh* 0.05)) - ftth((ftth(vh-rg*3) - ftth(vh* 0.1)) * 0.3))/17),
            }
        }
    }

    render() {
        return(
            <StylesProvider.Provider value={this.calculateStyles()}>
                <Main 
                    setSelectedRecipe={this.setSelectedRecipe}
                    setIngredients={this.setIngredients}
                    setFirst={this.setFirst}
                />
            </StylesProvider.Provider>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.getScreenParametors);
        window.addEventListener('load', this.getScreenParametors);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.getScreenParametors);
        window.removeEventListener('load', this.getScreenParametors);
    }

    componentDidUpdate(prevProps, prevState) {
        let url = this.getUrlLink(this.state.ingredients, this.state.rows * 3, this.state.firstRecipe);

        let oldUrl = this.getUrlLink(prevState.ingredients, prevState.rows * 3, prevState.firstRecipe);

        if(url !== oldUrl && this.state.alreadyClicked) {
            this.setState({unlockSearchButton: false});

            fetch(url).then(res => res.json()).then(json => {
                this.setState({
                    unlockSearchButton: true,
                    ammountOfPages: json.count,
                    jsonData: json.recps
                });
            });
        }
    }

    getUrlLink(ings, rows, first) {
        return '/recipe?' + ings + '&rows=' + rows + '&first=' + first;
    }
}

export default App;
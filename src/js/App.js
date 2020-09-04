import React from 'react';
import Main from './Main';
import '../css/App.css';
import {styles} from './Utility/Styles';
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
            selectedRecipeTop: selected.top,
            selectedRecipeDis: selected.dis,
            selectedRecipePic: selected.pic,
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
        let firstDevider = (rows !== 0 ? rows : 1) * 3; // to avoid NaN result, which cause errors in styles
        let first = Math.floor(this.state.firstRecipe / firstDevider) * firstDevider;
        
        this.setState({
            vw: vw,
            vh: vh,
            rightK: rightK,
            widthGreater: widthGreaterThanHeight,
        })

        if(rows !== this.state.rows || first !== this.state.firstRecipe) { // API calls is sent, when this parametors change, so I avoid unnesesary server load
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

    render() {
        return(
            <StylesProvider.Provider value={styles(this.state.vw, this.state.vh, this.state.rows, this.state.rightK, this.state.ingredients, this.state.widthGreater, this.state.jsonData, this.state.selectedRecipeTop, this.state.selectedRecipeDis, this.state.selectedRecipePic, this.state.firstRecipe, this.state.unlockSearchButton, this.state.ammountOfPages)}>
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

        if(url !== oldUrl && this.state.alreadyClicked) { // alreadyClicked is checked to avoid multiple requests
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
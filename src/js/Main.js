import React, { forwardRef } from 'react';
import Search from './Content/Search';
import Results from './Content/Results';
// import BadBatch from './Content/BadBatch';
// import RecipeFull from './Content/RecipeFull';
// import Recipel from './Content/Recipe';
import {StylesProvider} from './Utility/StylesProvider';

class Main extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;

    setSelectedRecipe = (selected) => {
        this.props.setSelectedRecipe(selected);
    }

    setIngredients = (ingredients) => {
        this.props.setIngredients(ingredients);
    }

    setFirst = (first) => {
        this.props.setFirst(first);
    }

    defineWhatToRender() {
        var styles = this.context;
        let a = false;
        let shouldShowResults = true;

        if( a ) {
            // TODO - BadBatch
            return
        } else if( a ) {
            // TODO - Recipe (full)
            return
        } else {
            return(
                <div className="main-grid" style={styles.mainGrid}>
                    <div className="main-grid-left" style={styles.mainGridLeft}>
                        <Search 
                            setIngredients={this.setIngredients}
                            setFirst={this.setFirst}
                        />
                    </div>
                    <div className="main-grid-right" style={styles.mainGridRight}>
                        {this.defineWhatToRenderOnRight(shouldShowResults)}
                    </div>
                </div>
            )
        }
    }

    defineWhatToRenderOnRight(shouldShowResults) {
        if(shouldShowResults) {
            return(
                <Results />
            )
        } else {
            // TODO - Recipe
            return
        }
    }

    renderPageSwitchButtons() {
        if(
            this.context.ammountOfPages > 1 &&
            this.context.selectedRecipe !== {}
        ) {
            let back = (this.context.firstRecipe / ((this.context.rows !== 0 ? this.context.rows : 1) * 3) - 1 >= 0) ? 1: 0;
            let forward = (this.context.firstRecipe / ((this.context.rows !== 0 ? this.context.rows : 1) * 3) + 1 < this.context.ammountOfPages) ? 1 : 0;
            return(
                <div class="bottom-credentials" style={this.context.pageSwitchButtons}>
                    <div 
                        class="page-switch-button" 
                        style={Object.assign({
                            opacity: back,
                        }, this.context.pageSwitchButton)}
                        onClick={() => this.switchPageBack()}
                    >
                        &#60;
                    </div>
                    <div 
                        class="page-switch-button" 
                        style={Object.assign(this.context.pageSwitchButton, {
                            opacity: forward,
                        })}
                        onClick={() => this.switchPageForward()}
                    >
                        &#62;
                    </div>
                </div>
            )
        }
    }

    switchPageBack = () => {
        let rows = (this.context.rows !== 0 ? this.context.rows : 1) * 3;
        if(this.context.firstRecipe / rows - 1 >= 0 && this.context.unlockSearchButton) {
            this.setFirst(this.context.firstRecipe - rows);
        }
    }

    switchPageForward = () => {
        let rows = (this.context.rows !== 0 ? this.context.rows : 1) * 3;
        if(this.context.firstRecipe / rows + 1 < this.context.ammountOfPages & this.context.unlockSearchButton) {
            this.setFirst(this.context.firstRecipe + rows);
        }
    }

    render() {
        var styles = this.context;
        return(
            <div className="app" style={styles.app}>
                <div>
                    {this.defineWhatToRender()}
                    {this.renderPageSwitchButtons()}
                    <div class="bottom-credentials" style={styles.fullWidth}>
                        <a href="https://github.com/DenisKuivalainen/softdevproj" class="bottom-text">2020   &#169;   Godlike</a>
                    </div>
                </div>               
            </div>              
        )
    }
}

export default Main;
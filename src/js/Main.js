import React from 'react';
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

    render() {
        var styles = this.context;
        return(
            <div className="app" style={styles.app}>
                <div>
                    {this.defineWhatToRender()}
                    <div style={styles.fullWidth}>
                        <div class="bottom-credentials">
                            <a href="https://github.com/DenisKuivalainen/softdevproj" class="bottom-text">2020   &#169;   Godlike</a>
                        </div>
                    </div> 
                </div>               
            </div>              
        )
    }
}

export default Main;
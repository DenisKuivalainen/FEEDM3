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

    defineWhatToRender() {
        var styles = this.context;
        let a = false;
        let shouldShowResults = true;

        if( a ) {
            // TODO - BadBatch
            return
        } else if( a ) {
            // TODO - RecipeFull
            return
        } else {
            return(
                <div className="main-grid" style={styles.mainGrid}>
                    <div className="main-grid-left" style={styles.mainGridLeft}>
                        <Search />
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
            <div style={styles.app}>
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
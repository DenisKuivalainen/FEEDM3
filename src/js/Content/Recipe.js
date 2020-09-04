import React from 'react';
import {StylesProvider} from '../Utility/StylesProvider';

class Recipe extends React.Component {
    constructor (props) {
      super(props);
      this.state = {}
    }
    static contextType = StylesProvider;

    setSelectedRecipe = () => {
        this.props.setSelectedRecipe({
            "top": '',
            "dis": '',
            "pic": ''
        });
    }

    render() {
        var styles = this.context;

        return(
            <div style={styles.recipeMain}>
                <div class="recipe-border" style={styles.recipeBorder}>
                    <div class="recipe-image" 
                        style={Object.assign(styles.recipePic, {
                            background: "url(" + styles.selectedRecipe.pic + ") 50% 50% / cover padding-box border-box",
                        })}
                    />
                    <div class="recipe-name" style={styles.recipeName}>
                        {styles.selectedRecipe.top}
                    </div>
                    <div class="recipe-name" style={styles.recipeDesc}>
                        {styles.selectedRecipe.dis}
                    </div>
                </div>
                <div 
                    class="page-switch-button" 
                    style={styles.backButton}  
                    onClick={() => this.setSelectedRecipe()}
                >
                    Back &#60;&#60;
                </div>
            </div>
        )
    }
}

export default Recipe;
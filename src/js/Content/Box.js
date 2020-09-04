import React from 'react';

export default function CardItem(props) {
    const setSelectedRecipe = () => {
        props.setSelectedRecipe(props.recipe);
    }

    return (
        <div class="recipe-box" 
            style={props.styles.recipeBox}
            onClick={() => setSelectedRecipe()}
        >
            <div class="recipe-image" 
                style={Object.assign(props.styles.recipeImage, {
                    background: "url(" + props.recipe.pic + ") 50% 50% / cover padding-box border-box", // TODO: delete picture on jsonData change
                })}
            />
            {props.recipe.top}
        </div>
    );
}
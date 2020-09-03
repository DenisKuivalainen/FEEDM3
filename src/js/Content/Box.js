import React from 'react';

export default function CardItem(props) {
    const setSelectedRecipe = (selected) => {
        props.setSelectedRecipe(props.styles.jsonData[selected]);
    }

    return (
        <div class="recipe-box" 
            style={props.styles.recipeBox}
            onClick={() => setSelectedRecipe(props.searchNumber)}
        >
            <div class="recipe-image" 
                style={Object.assign(props.styles.recipeImage, {
                    background: "url(" + props.recipe.pic + ") 50% 50% / cover padding-box border-box",
                })}
            />
            {props.recipe.top}
        </div>
    );
}
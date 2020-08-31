import React from 'react';

export default function CardItem(props) {
    return (
        <div class="recipe-box" style={props.styles.recipeBox}>
            <div class="recipe-image" 
                style={Object.assign(props.styles.recipeImage, {
                    background: "url(" + props.recipe.pic + ") 50% 50% / cover padding-box border-box",
                })}
            />
            {props.recipe.top}
        </div>
    );
}
import React from 'react';

export default function CardItem(props) {
    const img = new Image();
    img.onload = function() {
    //console.log(this.width + 'x' + this.height);
    }
    img.src = props.recipe.pic;

    return (
        <div class="recipe-box" style={props.styles.recipeBox} onClick={() => alert(props.recipe.dis)}>
            <div class="recipe-image" 
                style={Object.assign(props.styles.recipeImage, {
                    background: "url(" + props.recipe.pic + ")",
                    backgroundPosition: "50% 50%",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "border-box",
                    backgroundSize: "cover",
                })}
            />
            {props.recipe.top}
        </div>
    );
}
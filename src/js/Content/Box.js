import React from 'react';

export default function CardItem(props) {
    return (
        <div class="recipe-box" style={props.styles.recipeBox} onClick={() => alert("Hello")}>
            Hellooo
        </div>
    );
}
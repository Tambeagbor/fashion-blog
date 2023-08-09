import React from 'react';

function Article({ date, title, imageSrc, content }) {
    return (
    <article>
        <date>{date}</date>
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} />
        <p>{content}<a href="#">Continues... </a></p>
    </article>
    );
}

export default Article;

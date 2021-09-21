import React from 'react';

function Article({article:{
    title, 
    date = "January 1, 1970", 
    preview, 
    minutes
    }}) 

    {
    let minute = {minutes}.minutes;
    let icons = "";
    if(minute < 30 && minute >= 0){
        for(let i=0, n=Math.ceil(minute / 5); i<n; i++){
            icons += "☕️";
        }
    } else {
        for(let i=0, n=Math.ceil(minute / 10); i<n; i++){
            icons += "🍱";
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>
                <p>{date} • {icons} {minute} min read</p>
            </small>
            <p>{preview}</p>
        </article>
    );
}
export default Article;

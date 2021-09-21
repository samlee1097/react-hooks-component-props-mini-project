import React from 'react';
import Article from './Article';

function ArticleList({list}) {
    const articles = list.map((article)=>{
        return (
            <Article key={article.id} article={article}/>
        );   
    })   

    return (
        <main>
            {articles}
        </main>
    );
}

export default ArticleList;

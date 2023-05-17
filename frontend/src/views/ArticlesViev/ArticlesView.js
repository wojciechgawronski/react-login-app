import React, { useState } from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useLoaderData } from "react-router-dom";
import ArticlePaginationComponent from "./ArticlePaginationComponent";
import ArticlesListComponent from "./ArticlesListComponent";
import NoDataAlert from "../../components/NoDataAlert";
import PaginationClass from "../../components/PaginationClass";


const ArticlesView = () => {

    const data = useLoaderData();
    let articles = data.data;

    const deleteHandler = (id) => {
        const proceed = window.confirm('Are you sure?')

        if (proceed) {
            const url = process.env.REACT_APP_BACKEND_SERVER +'/articles/'+id;

            fetch (url, {
                method: 'DELETE',
            })
            .then(()=> {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Articles</SiteTitle>

                <div className="row">
                    <div className="col">
                        {articles.length !== 0 ? (
                            <>
                                <ArticlesListComponent articles={articles} onDelete={deleteHandler}/>
                                <ArticlePaginationComponent data={data}/>
                                <PaginationClass/>
                            </>
                        ) : (
                            <NoDataAlert/>
                        )}
                    </div>
                </div>

            </div>
        </main>
    </>
}

export default ArticlesView; 


export async function articlesLoader({ request }) {

    const searchParams =  new URL(request.url).searchParams;
    let page = searchParams.get('page');

    if (page) {
        page = '?page='+page;
    } else {
        page = ''
    }

    const url = process.env.REACT_APP_BACKEND_SERVER +'/articles'+page;

    try {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    } catch (e) {
        throw new Response({}), {
            status: 500, 
            statusText: e.message,
            data: url
        };
    }
}
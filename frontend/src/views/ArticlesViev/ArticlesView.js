import React, { useEffect } from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useLoaderData } from "react-router-dom";
import ArticlePaginationComponent from "./ArticlePaginationComponent";
import ArticlesListComponent from "./ArticlesListComponent";
import NoDataAlert from "../../components/NoDataAlert";


const ArticlesView = () => {

    const data = useLoaderData();
    let articles = data.data;

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Articles</SiteTitle>

                <div className="row">
                    <div className="col">
                        {articles.length !== 0 ? (
                            <>
                                <ArticlesListComponent articles={articles}/>
                                <ArticlePaginationComponent data={data}/>
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
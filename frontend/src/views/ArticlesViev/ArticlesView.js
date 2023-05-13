import React, { useEffect } from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useLoaderData } from "react-router-dom";
import ArticlePaginationComponent from "./ArticlePaginationComponent";
import ArticlesListComponent from "./ArticlesListComponent";
import NoDataAlert from "../../components/NoDataAlert";


const ArticlesView = () => {

    const data = useLoaderData();
    let articles = data.data;
    console.log(articles)

    useEffect(() =>{
        console.log('use effect')
    }, [])

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
    const page = searchParams.get('page');
    // console.log(page)

    const url = process.env.REACT_APP_BACKEND_SERVER +'/articles';

    const response = await fetch(url);
    const resData = await response.json();

    if (!response.ok) {
        throw new Response({}), {
            status: 500, 
            statusText: 'Could not fetch any data.',
            data: url
        };
    }

    return resData;

}
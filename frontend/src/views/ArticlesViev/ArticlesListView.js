import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useLoaderData } from "react-router-dom";
import { noDataAlert } from "../../util/view";


const ArticlesView = () => {

    let articlesList = useLoaderData();
    let aList = null;

    if (articlesList.length !== 0) {
        aList =  <ol>
            {articlesList.map((article, index )=> (
                <li key={index}>{article.title}</li>
            ))}
        </ol>;
    } else {
        articlesList = null;
    }

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Articles List</SiteTitle>

                <div className="row">
                    <div className="col">
                        {articlesList ? (aList) : (noDataAlert)}
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default ArticlesView; 

export async function listLoader() {

    const url = 'http://127.0.0.1:8000/api/v1/articles/list';
    const response = await fetch(url);
    const resData = await response.json();

    if (!response.ok) {
        throw new Response({}), {
            status: 500, 
            statusText: 'Could not fetch any data.',
            data: url
        };
    }

    return resData.data;

}
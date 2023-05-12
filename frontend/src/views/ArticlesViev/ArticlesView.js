import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { NavLink, useLoaderData } from "react-router-dom";
import { noDataAlert } from "../../util/view";


const ArticlesView = () => {

    let articles = useLoaderData();
    let aRows = null;

    if (articles.length !== 0) {
        aRows =  articles.map((article, index )=> (
                <tr key={index}>
                    <td>{article.id}</td>
                    <td>
                    <NavLink className="" to={`/articles/${article.id}`}>{article.title}</NavLink>
                        </td>
                    <td>...</td>
                    <td>...</td>
                    <td>
                        ...
                        {/* <button className="btn btn-success btn-sm rounded-0 me-1">show</button> */}
                        {/* <button className="btn btn-success btn-sm rounded-0 me-1">edit</button> */}
                        {/* <button className="btn btn-danger btn-sm rounded-0 me-1">delete</button> */}
                    </td>
                </tr>
            ))
        
    } else {
        articles = null;
    }

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Articles</SiteTitle>

                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles ? (aRows) : (noDataAlert)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default ArticlesView; 


export async function articlesLoader() {

    const url = 'http://127.0.0.1:8000/api/v1/articles';
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
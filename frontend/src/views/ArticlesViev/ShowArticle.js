import { useLoaderData } from "react-router-dom";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

const ShowArticle = () => {

    const article = useLoaderData(); 

    const created = new Date(article.created_at);
    const updated = new Date(article.updated_at);
    const created_at = `${created.getDay()}.${created.getDate()}.${created.getFullYear()}
        ${created.getUTCHours()}:${created.getMinutes()}:${created.getUTCSeconds()}`;
    const updated_at = `${updated.getDay()}.${updated.getDate()}.${updated.getFullYear()}
        ${updated.getUTCHours()}:${updated.getMinutes()}:${updated.getUTCSeconds()}`;
    

    return <>
        <main>
            <div className="container">
                <SiteTitle>{article.title}</SiteTitle>

                <div className="row">
                    <div className="col">
                        <p className="lead">{article.content}</p>
                        <p className="small mb-0"><strong>Created at:</strong> {created_at}</p>
                        <p className="small mb-0"><strong>Updated at:</strong> {updated_at}</p>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default ShowArticle;


export async function loader ({ params }) {
    const url = `http://127.0.0.1:8000/api/v1/articles/${params.id}`;
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
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useActionData, useLoaderData } from 'react-router-dom';
import ArticleForm from "./ArticleForm";

const EditArticle = () => {

    const data = useActionData();
    const article =  useLoaderData();

    const created = new Date(article.created_at);
    const updated = new Date(article.updated_at);
    const created_at = `${created.getDate()}.${created.getUTCMonth()}.${created.getFullYear()}
        ${created.getUTCHours()}:${created.getMinutes()}:${created.getUTCSeconds()}`;
    const updated_at = `${updated.getDate()}.${updated.getUTCMonth()}.${updated.getFullYear()}
        ${updated.getUTCHours()}:${updated.getMinutes()}:${updated.getUTCSeconds()}`;

    return <>
        <main>
            <div className="container">

                <SiteTitle>Edit Article</SiteTitle>

                {data && data.status === "OK" && <p className="alert alert-success small">{data.message}</p>}

                {data && data.errors && <ul className="ps-0">
                    <div className="small alert alert-danger ps-4">
                        {data.errors.title && <li>{data.errors.title[0]}</li>}
                        {data.errors.content && <li>{data.errors.content[0]}</li>}
                    </div>
                </ul>}

                <div className="row">
                    <div className="col">
                        <p className="text-muted small">ID: {article.id} | Created at: {created_at} | Last updated at: {updated_at}</p>
                        <ArticleForm 
                            title={article.title} 
                            content={article.content} 
                            action="edit"
                        />
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default EditArticle;


export async function loader ({ params }) {
    const url = process.env.REACT_APP_BACKEND_SERVER+`/articles/${params.id}/edit`;
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

export async function editArticleAction({request, params}) {

    const url = process.env.REACT_APP_BACKEND_SERVER+`/articles/${params.id}`;

    const data = await request.formData();

    const editArticleData = {
        title: data.get('title'),
        content: data.get('content'),
    }

    const resData = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(editArticleData)
    });

    return resData;
}
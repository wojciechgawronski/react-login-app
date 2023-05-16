import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { redirect, useActionData } from 'react-router-dom';
import ArticleForm from "./ArticleForm";

const NewArticle = () => {

    const data =  useActionData();

    return <>
        <main>
            <div className="container">

                <SiteTitle>New Article</SiteTitle>

                {data && data.errors && <ul>
                    {data.errors.title && <li>{data.errors.title[0]}</li>}
                    {data.errors.content && <li>{data.errors.content[0]}</li>}
                </ul>}

                <div className="row">
                    <div className="col">
                        <ArticleForm/>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default NewArticle; 


export async function newArticleAction({ request }) {

    const url = process.env.REACT_APP_BACKEND_SERVER+`/articles`;

    try {
        const data = await request.formData();

        const newArticleData = {
            title: data.get('title'),
            content: data.get('content'),
        }
 
        const resData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newArticleData)
        });

        if (resData.status === 401) {
            return resData;
        } else {
            return redirect('/articles');
        }

    } catch(e) {
        throw new Response({}), {
            status: 500, 
            statusText: e.message,
            data: url
        };
    }
    
    return;
}
import { NavLink } from "react-router-dom";

const ArticlesListComponent = ({articles, onDelete}) => {
    
    const dataTable =  articles.map((article, index )=> (
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
                <button onClick={() => (onDelete(article.id))} className="btn btn-danger btn-sm rounded-0 me-1">delete</button>
            </td>
        </tr>
    ))

    return <>
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
                {dataTable}
            </tbody>
        </table>
    </>
}

export default ArticlesListComponent;
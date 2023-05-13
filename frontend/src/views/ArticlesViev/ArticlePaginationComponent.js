import { Link } from "react-router-dom";


const ArticlePaginationComponent = ({ data }) => {
    const links = data.links;
    const meta = data.meta;
    
    if (!links.next) {
        return;
    }

    const paginationNext = data.links.next.replace(process.env.REACT_APP_BACKEND_SERVER,'');
    
    return <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" 
                        aria-label="Previous" 
                        to={links.prev}>
                            <span aria-hidden="true">&laquo; prev</span>
                    </Link>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <Link className="page-link"
                        aria-label="Next" 
                        to={paginationNext}> 
                        <span aria-hidden="true">&raquo;next</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <p className="small mb-0 text-muted">
            Total records: {meta.total} 
            <span className="mx-2">|</span> 
            Per page: {meta.per_page}
            <span className="mx-2">|</span>
            Current page: {meta.current_page}
        </p>
    </>
}

export default ArticlePaginationComponent;
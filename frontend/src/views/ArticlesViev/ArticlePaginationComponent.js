import { Link } from "react-router-dom";


const ArticlePaginationComponent = ({ data }) => {
    const links = data.links;
    const meta = data.meta;
    const metaLinks = data.meta.links;
    metaLinks.pop();
    metaLinks.shift();

    let paginationNext = null;
    if (data.links.next !== null) {
        paginationNext = data.links.next.replace(process.env.REACT_APP_BACKEND_SERVER,'');
    }

    let paginationPrev = null;
    if (data.links.prev !== null) {
        paginationPrev = data.links.prev.replace(process.env.REACT_APP_BACKEND_SERVER,'');
    }

    return <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                {paginationPrev ? (
                    <li className="page-item">
                        <Link className="page-link"
                            aria-label="Next" 
                            to={paginationPrev}> 
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                    </li>
                    ) : (
                        ''
                    )
                }

                {metaLinks.map((link, index) => (
                    <li key={index} className="page-item">
                        <Link 
                            className={link.active ? `page-link active` : `page-link`}
                            to={link.url.replace(process.env.REACT_APP_BACKEND_SERVER,'')}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
                
                {paginationNext ? (
                    <li className="page-item">
                        <Link className="page-link"
                            aria-label="Next" 
                            to={paginationNext}> 
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                    </li>
                    ) : (
                        ''
                    )
                }
                    
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
import React from "react";
import Pagination from "react-js-pagination";
import { NavLink } from "react-router-dom";

/**
 * Not change url: /articles?page=1/2/3..6
 * 
 * https://www.youtube.com/watch?v=hR1FOH17BO8&ab_channel=AmitavRoy
 * npm install react-js-pagination
 * https://www.npmjs.com/package/react-js-pagination
 */
class PaginationClass extends React.Component
{
    state = { 
        articles: null,
        paginationData: null,
    }

    async UNSAFE_componentWillMount() {
        this.getArticleData();
    }

    async getArticleData(pageNumber = 1) {
        let url = `${process.env.REACT_APP_BACKEND_SERVER}/articles?page=${pageNumber}`;
        const response = await fetch(url);
        const resData = await response.json();

        this.setState({paginationData: resData.meta})
        this.setState({articles: resData.data})
    }

    renderArticles(articles) {
        if (articles) {
            return <>
                <ul className="mb-0">{articles.map((article, index) => (
                    <li key={index}><NavLink to={`/articles/${article.id}`}>{article.title}</NavLink></li>
                ))}
                </ul>
            </>
        }
    }

    renderPagination(paginationData) {
        if (paginationData) {
            const { current_page, per_page, total } = this.state.paginationData;
            return <>
                <Pagination
                    activePage={current_page}
                    itemsCountPerPage={per_page}
                    totalItemsCount={total}
                    pageRangeDisplayed={5}
                    onChange={(pageNumber) => this.getArticleData(pageNumber)}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </>
        } 
    }

    render() {
        return <>
            <hr></hr>
            {this.renderArticles(this.state.articles)}
            {this.renderPagination(this.state.paginationData)}
        </>
    }
}

export default PaginationClass;
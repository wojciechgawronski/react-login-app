import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AccountView from './views/AccountView/AccountView';
import ArticlesListView, { listLoader as articlesListLoader} from './views/ArticlesViev/ArticlesListView';
import ArticlesView, { articlesLoader } from './views/ArticlesViev/ArticlesView';
import ShowArticle, { loader as articleLoader} from './views/ArticlesViev/ShowArticle';
import LoginView, { action as loginAction } from './views/LoginView/LoginView';
import RegisterView, { action as registerAction } from './views/RegisterView/RegisterView';
import StartView from './views/StartView/StartView';
import RootLayout from './views/RootLayout';
import ErrorPage from './views/ErrorPage';
import NewArticle, { newArticleAction } from './views/ArticlesViev/NewArticle';
import EditArticle, { loader as editArticleLoader, editArticleAction } from './views/ArticlesViev/EditArticle';
import { tokenLoader, checkAuthLoader, logoutAction } from './util/auth';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        id: 'rootElement',
        loader: tokenLoader,
        children: [
            {
                index: true,
                element: <StartView/>,
            },
            {
                path: 'login',
                element: <LoginView/>,
                action: loginAction
            },
            {
                path: 'logout',
                action: logoutAction,
            },
            {
                path: 'register',
                element: <RegisterView/>,
                action: registerAction,
            },
            {
                path: 'account',
                element: <AccountView/>,
                loader: checkAuthLoader,
            },
            {
                path: 'articles',
                children: [
                    {
                        index: true,
                        element: <ArticlesView/>,
                        loader: articlesLoader,
                    },
                    { 
                        path: ':id',
                        id: 'articleId',
                        element: <ShowArticle/>,
                        loader: articleLoader
                    },
                    {
                        path: ':id/edit',
                        element: <EditArticle/>,
                        loader: editArticleLoader,
                        action: editArticleAction,
                    },
                    {
                        path: 'new',
                        element: <NewArticle/>,
                        action: newArticleAction,
                    }
                ]
            },
            {
                path: 'articles-list',
                element: <ArticlesListView/>,
                loader: articlesListLoader,
            },

        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
  );
}

export default App;

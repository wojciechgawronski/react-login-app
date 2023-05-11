import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AccountView from './views/AccountView/AccountView';
import LoginView, { action as loginAction } from './views/LoginView/LoginView';
import RegisterView, { action as registerAction } from './views/RegisterView/RegisterView';
import StartView from './views/StartView/StartView';
import RootLayout from './views/RootLayout';
import ErrorPage from './views/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        id: 'root',
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
                path: 'register',
                element: <RegisterView/>,
                action: registerAction,
            },
            {
                path: 'account',
                element: <AccountView/>,
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

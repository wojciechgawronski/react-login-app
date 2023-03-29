import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccountView from './views/AccountView/AccountView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import StartView from './views/StartView/StartView';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' Component={StartView}></Route>
                <Route path='/login' Component={LoginView}></Route>
                <Route path='/account' Component={AccountView}></Route>
                <Route path='/register' Component={RegisterView}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import WallNotes from './Pages/WallNotes';

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/wallnotes" element={<WallNotes/>} />
        </Routes>
        </BrowserRouter>
    )
}
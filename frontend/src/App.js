import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<HomePage />} path="/"></Route>
            </Route>

            <Route element={<LoginPage />} path="/login" exact></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

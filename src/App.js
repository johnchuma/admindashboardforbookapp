
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/login_page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutPage from './pages/layout_page';
import HomePage from './pages/home_page';
import BooksPage from './pages/books_page';
import UsersPage from './pages/users_page';
import AuthProvider from './utils/auth_provider';

function App() {
  const router = createBrowserRouter([
    {
         path:"/",
         element:<LayoutPage/>,
         children:[
          {
            path:"/",
            index:true,
            element:<HomePage/>,
          },
          {
            path:"/books",
            element:<BooksPage/>,
          },
          {
            path:"/users",
            element:<UsersPage/>,
          }
         ]
    },
    {
      path:"/login",
      element:<LoginPage/>
    }

    
])
  return (
   
          <AuthProvider>
              <RouterProvider router={router} />
          </AuthProvider>
   
  );
}


export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import ROUTES from './router/ROUTES';

const router=createBrowserRouter(ROUTES)

function App() {
  return (
    <div className="App">
          <RouterProvider router={router}/>
          <Toaster/>
    </div>
  );
}

export default App;

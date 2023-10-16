import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import './styles/App.css'
import ModelItems from './components/routes/Home';
import Dashboard from './components/routes/Dashboard';
import Fablabs from './components/routes/FabLabs';
import About from './components/routes/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModelItems/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/fablabs",
    element: <Fablabs/>
  },
  {
    path: "/about",
    element: <About/>
  },
]);


function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App

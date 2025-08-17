import Example from './Example'; 
import Home from './home/Home';  
import Navigation from './navigation/Navigation';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        
    <Route path="/" element={<Navigation />}>
            <Route index element={<Example />} />
            <Route path="/home" element={<Home />}/>
    </Route>

    )
);


function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;

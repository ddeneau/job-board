import Example from './Example'; 
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Example />} />
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

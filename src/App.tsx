import Example from './Example'; 
import Home from './home/Home';  
import Users from './users/Users';
import Profile from './profile/Profile';    
import Navigation from './navigation/Navigation';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

const router = createBrowserRouter(
    createRoutesFromElements(
        
    <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/board" element={<Example/>} />
            <Route path="/users" element={<Users />} />


            <Route path="/profile" element={
                <Authenticator>
                    <Profile/>
                </Authenticator>} />
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

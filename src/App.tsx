import Home from './home/Home'; 
import Profile from './profile/Profile';
import Board from './board/Board';
import Social from './social/Social';   
import Navigation from './navigation/Navigation';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react'; 



const router = createBrowserRouter(
    createRoutesFromElements(
        
    <Route path="/" element={<Navigation />}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/social" element={<Social />} />
            <Route path="/profile" element={
                <Authenticator>
                    {({ signOut, user }) => (
                        <main>
                            <h1>Hello {user?.username}</h1>
                            <button onClick={signOut}>Sign out</button>
                        </main>
                    )}
                </Authenticator>
            } />
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

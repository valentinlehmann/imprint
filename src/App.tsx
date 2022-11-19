import {Container, MantineProvider} from '@mantine/core';
import {Privacy} from "./routes/Privacy";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./routes/Error";
import {Imprint} from "./routes/Imprint";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Imprint/>,
        errorElement: <Error/>
    },
    {
        path: '/privacy',
        element: <Privacy/>
    }
])

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Container>
                <RouterProvider router={router}/>
            </Container>
        </MantineProvider>
    );
}

export default App

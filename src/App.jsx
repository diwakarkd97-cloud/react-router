import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './components/Template';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Error from './components/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Template />,
     
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/welcome/:username",
          element: <Welcome />
        }, 
        {
          path: "/*",
          element: <Error />
        }
      ]
    }
  ]);

  return (
    
    <RouterProvider router={router} />
  );
};

// 5. Lowercase export
export default App;
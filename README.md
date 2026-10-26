# React Router v6 Navigation Demo

A modern React application demonstrating routing using the latest `createBrowserRouter` API from React Router v6. This project illustrates how to manage nested routes, shared layout templates, dynamic URL parameters, and custom 404 error handling.

##  Features

* **Modern Routing API:** Utilizes `createBrowserRouter` and `RouterProvider` for robust, data-driven routing.
* **Shared Layouts:** Implements a global `Template` component with a persistent navigation bar, using `<Outlet />` to render child routes seamlessly.
* **Dynamic Routing:** Uses the `useParams` hook to capture and display dynamic data directly from the URL (e.g., `/welcome/:username`).
* **Error Handling:** Includes a catch-all route (`/*`) to gracefully handle undefined URLs with a custom 404 Error page.
* **Client-Side Navigation:** Employs `<Link>` components to ensure fast, page-reload-free navigation.

##  Project Structure

```text
src/
├── components/
│   ├── Template.jsx       # Global layout containing the Nav bar and <Outlet/>
│   ├── Home.jsx           # Landing page
│   ├── About.jsx          # About page
│   ├── Services.jsx       # Services page
│   ├── Contact.jsx        # Contact page
│   ├── Welcome.jsx        # Dynamic route demonstrating useParams()
│   └── Error.jsx          # Fallback 404 page for unknown routes
├── App.jsx                # Router configuration and initialization
└── main.jsx               # React entry point

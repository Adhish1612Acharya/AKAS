import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Login from "./routes/Login";
// import Home from "./routes/others/Home.tsx";
// import ErrorPage from "./routes/others/ErrorPage.tsx";
// import { store } from "./store/features/store.ts";
// import { Provider } from "react-redux";
// import Login from "./routes/others/Login.tsx";
// import { LoginProvider } from "./components/LoginProvider.tsx";
// import NavBar from "./components/NavBar.tsx";
// import FooterDiv from "./components/Footer.tsx";
// import { ThemeProvider } from "@emotion/react";
// import theme from "./theme.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/error",
  //   element: <ErrorPage />,
  // },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* <LoginProvider> */}
        {/* <ThemeProvider theme={theme}> */}
        {/* <NavBar /> */}
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              bodyClassName="toastBody"
              style={{ marginTop: "5rem" }}
            />
            {/* <Provider store={store}> */}
              {/* <div style={{ marginTop: "4rem",width:"100%",flex:1 }}> */}
                <RouterProvider router={router} />
              {/* </div> */}
            {/* </Provider> */}
          {/* <FooterDiv /> */}
          {/* <App/> */}
        {/* </ThemeProvider>
      </LoginProvider> */}
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

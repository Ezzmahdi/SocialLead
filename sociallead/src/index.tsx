import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
// // Import your publishable key
// // const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// const PUBLISHABLE_KEY ='pk_test_Y29zbWljLWFzcC00Ni5jbGVyay5hY2NvdW50cy5kZXYk'
 
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
 
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <App />
//     </ClerkProvider>
//   </React.StrictMode>,
// )

// // Import the layouts
// import RootLayout from './layouts/root-layout'
// import DashboardLayout from './layouts/dashboard-layout'
 
// // Import the components
// import IndexPage from './pages/Home'
// import SignInPage from './pages/Login'
// import SignUpPage from './pages/GetStarted'
// import DashboardPage from './pages/Dashboard'

// // Import your publishable key
// // const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// const PUBLISHABLE_KEY ='pk_test_Y29zbWljLWFzcC00Ni5jbGVyay5hY2NvdW50cy5kZXYk'
 
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
 
// const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <IndexPage /> },
//       { path: "/sign-in/*", element: <SignInPage /> },
//       { path: "/sign-up/*", element: <SignUpPage /> },
//       {
//         element: <DashboardLayout />,
//         path: "dashboard",
//         children: [
//           { path: "/dashboard", element: <DashboardPage /> },
//         ]
//       }
//     ]
//   }
// ])

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

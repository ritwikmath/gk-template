import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import Protected from './components/Protected';
import Public from './components/Public';

// ----------------------------------------------------------------------

export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <Protected><DashboardLayout /></Protected>,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'order', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <Public><LoginPage /></Public>,
    },
    {
      path: 'forgot-password',
      element: <ForgetPasswordPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

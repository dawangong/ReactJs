import App from '../App'
import Test from '../views/test/test';
import NotFound from '../views/notFound/notFound'

const routerConfig = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/test/:id",
    component: Test
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routerConfig;


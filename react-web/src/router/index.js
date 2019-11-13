import App from '../App'
import Test from '../views/test/test';

const routerConfig = [
  {
    path: "/",
    exact: true,
    component: App
  },
  {
    path: "/test/:id",
    component: Test
  }
];

export default routerConfig;


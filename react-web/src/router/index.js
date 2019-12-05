import App from '../App'
import Other from '../views/other/other';
import About from '../views/about/about';
import NotFound from '../views/notFound/notFound'

const routerConfig = [
  {
    path: "/",
    name: "首页",
    exact: true,
    component: App
  },
  {
    path: "/other",
    name: "其他",
    component: Other
  },
  {
    path: "/about",
    name: "关于",
    component: About
  },
  {
    path: '*',
    name: "404",
    component: NotFound
  }
];

export default routerConfig;


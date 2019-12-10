import Index from '../views/index/index'
import Record from '../views/record/record';
import More from '../views/more/more';
import About from '../views/about/about';
import NotFound from '../views/notFound/notFound'

const routerConfig = [
  {
    path: "/",
    name: "我的首页",
    exact: true,
    component: Index
  },
  {
    path: "/record",
    name: "我的记录",
    component: Record
  },
  {
    path: "/more",
    name: "更多功能",
    component: More
  },
  {
    path: "/about",
    name: "关于网站",
    component: About
  },
  {
    path: '*',
    name: "404",
    component: NotFound
  }
];

export default routerConfig;


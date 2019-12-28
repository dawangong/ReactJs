import Index from '../views/index/index'
import Record from '../views/record/record';
import More from '../views/more/more';
import About from '../views/about/about';
import NotFound from '../views/notFound/notFound'

const routerConfig = [
  {
    path: "/",
    name: "我的主页",
    EnglishName: "MY Page",
    exact: true,
    component: Index
  },
  {
    path: "/record",
    name: "我的记录",
    EnglishName: "MY RECORD",
    component: Record
  },
  {
    path: "/more",
    name: "更多功能",
    EnglishName: "MORE FEATURES",
    component: More
  },
  {
    path: "/about",
    name: "关于网站",
    EnglishName: "ABOUT WEBSITE",
    component: About
  },
  {
    path: '*',
    name: "404",
    EnglishName: "NOT FOUND",
    component: NotFound
  }
];

export default routerConfig;


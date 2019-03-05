import Home from './Components/Home.vue';
import Blogs from './Components/blog/blogs.vue';
import Resume from './Components/CV/CV.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blogs },
  { path: '/resume', component: Resume }
];

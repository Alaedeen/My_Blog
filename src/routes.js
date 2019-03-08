import Home from './Components/Home.vue';
import Resume from './Components/CV/CV.vue';

const BlogStart = resolve => {
  require.ensure(['./Components/blog/blogHome.vue'], () => {
    resolve(require('./Components/blog/blogHome.vue'));
  }, 'blog');
};
const Blog = resolve => {
  require.ensure(['./Components/blog/blogs.vue'], () => {
    resolve(require('./Components/blog/blogs.vue'));
  }, 'blog');
};
const BlogDetails = resolve => {
  require.ensure(['./Components/blog/BlogDetail.vue'], () => {
    resolve(require('./Components/blog/BlogDetail.vue'));
  }, 'blog');
};
const AddBlog = resolve => {
  require.ensure(['./Components/blog/AddBlog.vue'], () => {
    resolve(require('./Components/blog/AddBlog.vue'));
  }, 'blog');
};

export const routes = [
  { path: '/', component: Home },
  { path: '/blog',
    components:{
      default: BlogStart,
    },
    children: [
      {
        path: '',
        name:'blog',
        component: Blog,
      }, {
        path: 'new',
        component: AddBlog,
        beforeEnter: (to, from, next) => {
          console.log('inside new');
          next();
        }
      },
        {
          path: ':id',
          component: BlogDetails, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
          }
        },
    ]
   },
  { path: '/resume', component: Resume },
  {path: '*', redirect: '/'},
];

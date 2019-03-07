import Vue from 'vue';
import Vuex from 'vuex';

import {blog} from './modules/blogs';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    blog
  }
});

import blogs from '../../data/blogs'

const state ={
  blogs: []
}

const getters = {
  blogs: state => {
    return state.blogs
  }
}

const mutations = {
  'SET_BLOGS' (state, blogs){
      state.blogs=blogs;
  },
  'ADD_BLOG' (state, blog){
    state.blogs.push(blog)
    }
}

const actions = {
  initBlogs: ({commit}) => {
    commit('SET_BLOGS', blogs)
  },
  addBlog: ({commit}, order) => {
    commit('ADD_BLOG', order)
  },
}



export const blog = {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}

const initState = {
  posts: [
    {id: '1', title: 'title 1', body: 'this is the body for post 1'},
    {id: '2', title: 'title 2', body: 'this is the body for post 2'},
    {id: '3', title: 'title 3', body: 'this is the body for post 3'},
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };

  }
  return state;
};

export default rootReducer;
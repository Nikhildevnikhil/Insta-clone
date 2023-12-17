import { create } from "zustand";

const userProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // this is used to update the no. of post in the user profile page
  addPost : (post) => set(state => ({
    userProfile: {...state.userProfile,posts : [post.id,...state.userProfile.posts]}
  })),
  deletePost : (postId) => set(state => ({
    userProfile : {
      ...state.userProfile,
      posts : state.userProfile.posts.filter((id) => postId !== id)
    }
  }))
}));

export default userProfileStore;

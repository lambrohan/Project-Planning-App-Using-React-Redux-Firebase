export const createProject = (project) => {
  return (dispatch,getState,{getFirebase,getFirestore}) =>{
    //make async calls to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName:profile.firstName,
      authorLastName:profile.lastName,
      authorId:authId,
      createdAt:new Date(),

    }).then(()=>{
      dispatch({type:'CREATE_PROJECT',payload:project});
    }).catch((err)=>{
      console.log(err);
      dispatch({type:'CREATE_PROJECT_ERROR',err})
    })

    
  }
    
  
}
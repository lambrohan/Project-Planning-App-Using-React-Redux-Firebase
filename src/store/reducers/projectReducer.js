const initState = {
  projects:[
    {id:'1',title:'React Project',content:'Basic Stuff'},
    {id:'2',title:'Android Java Project',content:'Hookin up some listeners nothing much!'},
    {id:'3',title:'Processing Project',content:'Some math fun and awesome visuals.'},

  ]
}

const projectReducer = (state=initState,action) =>{
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project',action.payload)
      break;
    case 'CREATE_PROJECT_ERROR' :
      console.log(action.payload);
      break;
    default:
      break;
  }
  return state;
}

export default projectReducer;
const initState = {
  authError:null
}

const authReducer = (state=initState,action) =>{
  switch (action.type) {
    case 'LOGIN_ERR':
    console.log('LOGIN_ERR')
      return {
        ...state,
        authError:'Login Failed'
      }

    case 'LOGIN_SUCCESS':
    console.log('LOGIN SUCCESS');
    return{
      ...state,
      authError:null
    }
    
    case 'SIGNUP_SUCCESS':
    console.log('SIGNUP SUCCSS');
    return {
      ...state,
      authError:null
    }

    case 'SIGNUP_ERR':
    console.log('SIGNUP_ERR');
    return{
      ...state,
      authError:action.err.message
    }

    case 'SIGNOUT_SUCCESS':
    console.log('SIGNOUT_DONE')
    return state;
    default:
    return state;
  }
}

export default authReducer;
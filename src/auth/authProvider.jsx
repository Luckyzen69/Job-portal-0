import {React,createContext,useContext,useReducer} from "react";
     
  const  AuthContext= createContext();

  const initialState = {
    isAuthenticated:false,
    user:null,
  };

    const  authReducer =(state, action) =>{
        switch(action.type){
            case 'LOGIN':
                return{
                    ...state,
                    isAuthenticated,
                    user: action.payload,
                };
                case 'LOGOUT':
                    return{
                        ...state,
                        isAuthenticated:false,
                        user:null,
                    };
                    default:
                        return state;
        }
    };

    const AuthProvider =({ children  }) =>{
        const [state, dispatch] = useReducer(authReducer, initialState);

        const login = (user) => {
            dispatch({type: 'LOGIN',payload: user});
        };

        const logout =()=>{
            dispatch({type:'LOGOUT'});
            return (
                <AuthContext.Provider value = {{...state,login,logout}}>
                    {children}
                </AuthContext.Provider>
            )
        };
    };

    const useAuth = () => {
        const context = useContext(AuthContext);
        if(!context){
            throw new Error('useAuth must be used inside authProvider')
        }  
        return context;  
    };
    export {AuthProvider,useAuth}

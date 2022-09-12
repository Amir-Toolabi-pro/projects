export const ComListRedus = (state = false , action)=>{
    switch(action.type){
        case "COMLIST":
            return state = true;
        case "GOLIST":
            return state = false;
        default:
            return state   ; 
    }
}
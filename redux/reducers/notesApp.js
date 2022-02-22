
export const UPDATE = 'UPDATE';

export const updateHome = {
    update: false,
};

export const contarMas = () => {
    return {
      type: CONTAR,
    }
};

export default function contador_reducer(state=updateHome, action){
    switch(action.type){  
      case UPDATE: {
        return {
          update: !state.update
        }
    }
      default: return state; 
    } 
} 


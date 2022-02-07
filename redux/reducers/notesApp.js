import Images from '../../components/Images';

export const CONTAR = 'CONTAR';
export const QUITAR_HABITO = 'QUITAR_HABITO';

export const habitos = {
    habitos: [  
                {name: 'Caminar', key: '1', habitIcon:  Images.rocketIcon},
                {name: 'GYM', key: '4', habitIcon:  Images.scopeIcon},
                {name: 'No Fumar', key: '2', habitIcon:  Images.codingIcon},
              ],
    contador: 0,
};


export const contarMas = () => {
    return {
      type: CONTAR,
    }
};

export const quitar_habito_action = (id_habito) => {
  return {
    type: QUITAR_HABITO,
    payload: id_habito
  }
};



export default function contador_reducer(state=habitos, action){
    switch(action.type){  
      case CONTAR: {
        return {
          ...state,
          contador: state.contador + 1
        }
    }
      case QUITAR_HABITO: {
        console.log('AAAAAAAAAAAAAAAAAAA');
        return {
          ...state,
          habitos: state.habitos.filter((habito) => habito.key !== action.payload),
        }
     }
      default: return state; 
    } 
} 

import Images from '../../components/Images';

export const CONTAR = 'CONTAR';
export const QUITAR_HABITO = 'QUITAR_HABITO';
export const AGREGAR_HABITO = 'AGREGAR_HABITO';

export const habitos = {
    habitos: [  
                {name: 'Caminar', key: '1', habitIcon:  'user'},
                {name: 'Leer', key: '4', habitIcon:  'book'},
                {name: '1 Story', key: '2', habitIcon:  'instagram'},
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

var id = 4;

export const agregar_habito_action = (name, habitIcon) => {
  id = id + 1;
  return {
    type: AGREGAR_HABITO,
    payload: {name: name, id: id,habitIcon:  habitIcon}
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
        console.log(habito);

        return {
          ...state,
          habitos: state.habitos.filter((habito) => habito.key !== action.payload),
        }
     }
     case AGREGAR_HABITO: {
      console.log('agregado' + action.payload.id   );
      habitos.habitos.push(action.payload);
      return {
        ...state,
        habitos: habitos.habitos,
      }
    }
      default: return state; 
    } 
} 

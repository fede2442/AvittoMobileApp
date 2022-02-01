import Images from '../../components/Images';

export const CONTAR = 'CONTAR';
export const QUITAR_HABITO = 'QUITAR_HABITO';

export const habitos = {
    habitos: [  
                {name: 'Caminar', key: '1', habitIcon:  Images.rocketIcon},
                {name: 'GYM', key: '4', habitIcon:  Images.scopeIcon},
                {name: 'No Fumar', key: '2', habitIcon:  Images.codingIcon},
                {name: 'Correr', key: '3', habitIcon:  Images.starIcon},
                {name: 'Pastillas', key: '5', habitIcon:  Images.codingIcon},
                {name: 'Remedio', key: '6', habitIcon:  Images.rocketIcon},
                {name: '5 Vasos', key: '7', habitIcon:  Images.scopeIcon},
                {name: 'Cumpli Dieta', key: '8', habitIcon:  Images.starIcon},
                {name: 'Lavar Platos', key: '9', habitIcon:  Images.uxIcon},
                {name: 'Escribir', key: '10', habitIcon:  Images.tecladoIcon},
                {name: 'Estudiar 10"', key: '8', habitIcon:  Images.estudiarIcon},
                {name: 'Pagar Cuentas', key: '10', habitIcon:  Images.cuentasIcon},
                {name: 'Sacar Perro', key: '9', habitIcon:  Images.uxIcon},
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

import { configureStore, createSlice } from '@reduxjs/toolkit'

interface UserState {
  name: string;
  age: number;
}

let user = createSlice({
  name : 'user',
  initialState : { name : '김종훈', age : 20 } as UserState,
  reducers :{
    changeName(state){
      state.name = 'park'
    },

  //state  변경함수를   action이라고 함
    increase(state, action){
      state.age += action.payload
    }
  }
})

//   increase(10)
//   increase(100)

export let { changeName, increase } = user.actions

interface CartState {
  id : number;
  thumbnail : string;
  title: string;
  count: number;
  price: number;
}


let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 1, thumbnail:'img/Product/001/001_1.jpg', title : '상큼딸기 마카롱', count : 1, price : 1800 }
  ] as CartState[],
  reducers : {
    addCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
    });

    state[num].count++;
  },
  decreaseCount(state, action) {
    let num = state.findIndex((a) => {
      return a.id === action.payload;
    });
    if (state[num].count > 0) {
      state[num].count--;
    } else if (state[num].count === 0) {
      alert("상품이 더 이상 없습니다.");
    }
  },
  addItem(state, action) {
    let num = state.findIndex((a) => a.id === action.payload.id);
    if (num !== -1) {
      state[num].count += action.payload.count ;
    } else {
      state.push(action.payload);
    }
  },

  deleteItem(state, action) {
    let num = state.findIndex((a) => {
      return a.id === action.payload;
    });
    state.splice(num, 1);
  },
  sortName(state, action) {
    state.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
  }
})


export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});





import createAsyncSlice from './helper/createAsyncSlice';
import { PHOTOS_GET } from '../api';

const slice = createAsyncSlice({
  name: 'feed',
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      //desestruturado o action payload (pois ele tb é uma array)
      // pois será enviado cada um dos itens ao estado list
      // utilizado o método push
      state.list.push(...action.payload);
      // quando o action payload vier vazio mudará o estado para falso
      if (action.payload.length === 0) state.infinite = false;
    },
    addPage(state) {
      state.pages++;
    },
    resetState(state) {
      state.infinite = true;
      state.pages = 1;
      state.list = [];
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export const fetchFeed = slice.asyncAction;

// renomeando o resetState
export const { addPhotos, addPage, resetState: resetFeedState } = slice.actions;

export const loadNewPhotos =
  ({ total = 6, user }) =>
  async (dispatch, getState) => {
    const { feed } = getState();
    dispatch(addPage());
    const { payload } = await dispatch(
      fetchFeed({ page: feed.pages, total, user }),
    );
    dispatch(addPhotos(payload));
  }; 
export default slice.reducer;

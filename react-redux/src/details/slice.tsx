import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../services/api";
import { AppDispatch, RootState } from "../store";
import { Article, GetArticles } from "../types/types";

interface DetailsComponentState {
  article: Article[];
}

const initialState: DetailsComponentState = {
  article: [],
};

export const detailsComponentSlice = createSlice({
  name: "detailsComponent",
  initialState,
  reducers: {
    changeArticle: (state, action: PayloadAction<Article[]>) => {
      state.article = action.payload;
    },
  },
});

export const { changeArticle } = detailsComponentSlice.actions;

export const getArticle =
  (id: string, date: string) => async (dispatch: AppDispatch):Promise<void> => {
    axiosInstance
      .get<GetArticles>(`/v2/everything?qInTitle=${id}&from=${date}&to=${date}&apiKey=40f8ecaa00bd42db95beab4189efa260`)
      .then((response) => dispatch(changeArticle(response.data.articles))); // 329abaf799f04521818f8694ecd73318
  };

export const selectSearchValue = (state: RootState):string =>
  state.mainComponent.value;

export default detailsComponentSlice.reducer;

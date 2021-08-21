import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../services/api";
import { AppDispatch, RootState } from "../store";
import { Article, GetArticles, SortType } from "../types/types";

interface DetailsComponentState {
  article: Article[];
}

const initialState: DetailsComponentState = {
  article: [],
}

export const detailsComponentSlice = createSlice({
  name: 'detailsComponent',
  initialState,
  reducers: {
    changeArticle: (state, action: PayloadAction<Article[]>) =>
     { state.article = action.payload }
     ,
  },
})

export const getArticle = (id: string,
  date: string
  ) => async (dispatch: AppDispatch) => { axiosInstance
  .get<GetArticles>(`/v2/everything?qInTitle=${id}&from=${date}&to=${date}&apiKey=40f8ecaa00bd42db95beab4189efa260`) // 329abaf799f04521818f8694ecd73318
  .then((response) =>
  dispatch(changeArticle(response.data.articles))
  )}


export const { changeArticle } = detailsComponentSlice.actions

export const selectSearchValue = (state: RootState) => state.mainComponent.value

export default detailsComponentSlice.reducer

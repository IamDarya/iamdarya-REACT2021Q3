import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../services/api";
import { AppDispatch, RootState } from "../store";
import { Article, GetArticles, SortType } from "../types/types";

interface MainComponentState {
  value: string;
  totalResults: number;
  articles: Article[];
  isLoading: boolean;
}

const initialState: MainComponentState = {
  value: "",
  totalResults: 0,
  articles: [],
  isLoading: false,
};

export const mainComponentSlice = createSlice({
  name: "mainComponent",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    changeTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    changeArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  changeValue,
  changeArticles,
  changeIsLoading,
  changeTotalResults,
} = mainComponentSlice.actions;

export const getArticles =
  (
    searchValueAPI: string,
    sortByAPI: SortType,
    amountArtclsPerPAgeAPI: number,
    pageAPI: number
  ) =>
    async (dispatch: AppDispatch):Promise<void> => {
      try {
        const response: AxiosResponse<GetArticles> = await axiosInstance.get(
          `/v2/everything?q=${searchValueAPI}&sortBy=${sortByAPI}&pageSize=${amountArtclsPerPAgeAPI}&page=${pageAPI}&apiKey=1937ba3dfc0942eb85c1f4032377b9a6` // 40f8ecaa00bd42db95beab4189efa260 ; 329abaf799f04521818f8694ecd73318
        );
        dispatch(changeTotalResults(response.data.totalResults));
        dispatch(changeArticles(response.data.articles));
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch(changeIsLoading(false));
      }
    };

export const selectSearchValue = (state: RootState):string =>
  state.mainComponent.value;

export default mainComponentSlice.reducer;

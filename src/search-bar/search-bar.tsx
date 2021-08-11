import React, { ChangeEvent, useEffect, useState } from "react";
import { AxiosResponse } from "../../node_modules/axios/index";
import { AmountArtclsPerPAge, Article, GetArticles, SortType } from "../types/types";
import { Posts } from "../articles/posts";
import { axiosInstance } from "../services/api";
import "../style.scss";

export function SearchBar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [clickSearch, setClickSearch] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortType>(SortType.publishedAt);
  const [amountArtclsPerPAge, setAmountArtclsPerPAge] = useState<AmountArtclsPerPAge>(AmountArtclsPerPAge.twenty);
  const [totalResults,setTotalResults] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const getArticlesFromAPI=async ()=>{
    if(searchValue !== ''){
    try {
      const response: AxiosResponse<GetArticles> = await axiosInstance.get(
        `/v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${amountArtclsPerPAge}&apiKey=40f8ecaa00bd42db95beab4189efa260`
      );
      setTotalResults(response.data.totalResults);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    }
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClickSearch(true);
    setIsLoading(true);
  await getArticlesFromAPI();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(()=>{
    getArticlesFromAPI();
  }, [sortBy, amountArtclsPerPAge]);

  return (
    <>
      <h1>Search For The News</h1>
      <form className="search" onSubmit={handleSubmit}>
        <label htmlFor="search-txt">
          <input
            id="search-txt"
            className="search-txt"
            type="text"
            autoComplete="off"
            placeholder="Type to search..."
            onChange={handleChange}
            value={searchValue}
            disabled={isLoading}
          />
        </label>
        <button type="submit" className="search-btn" disabled={isLoading}>
          {isLoading && "Searching..."}
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </form>
      <div className="btns-for-sort-wrapper">
        <label className="sort-by-label margin-for-labels">Sort by:</label>
        <button
          type="submit"
          onClick={() => {setSortBy(SortType.publishedAt)}}
          value={SortType.publishedAt}
          disabled={!clickSearch || sortBy === SortType.publishedAt}
        >
          {SortType.publishedAt}
        </button>
        <button
          type="submit"
          onClick={() => {setSortBy(SortType.popularity)}}
          value={SortType.popularity}
          disabled={!clickSearch || sortBy === SortType.popularity}
        >
          {SortType.popularity}
        </button>
        <button
          type="button"
          onClick={() => {setSortBy(SortType.relevancy)}}
          value={SortType.relevancy}
          disabled={!clickSearch || sortBy === SortType.relevancy}
        >
          {SortType.relevancy}
        </button>
      </div>
      <Posts
        articles={articles}
        isLoading={isLoading}
        clickSearch={clickSearch}
      />
      <div className="prev-next-btns-wrapper">
        <label htmlFor="amount-of-artcles-per-page" className='margin-for-labels'>Amount of articles per page: </label>
        <select value={amountArtclsPerPAge} onChange={(event)=>{setAmountArtclsPerPAge(parseInt(event.target.value))}} name="amount-of-artcles-per-page" id="amount-of-artcles-per-page">
          <option value={AmountArtclsPerPAge.twenty}>{AmountArtclsPerPAge.twenty}</option>
          <option value={AmountArtclsPerPAge.ten}>{AmountArtclsPerPAge.ten}</option>
          <option value={AmountArtclsPerPAge.five}>{AmountArtclsPerPAge.five}</option>
          <option value={AmountArtclsPerPAge.one}>{AmountArtclsPerPAge.one}</option>
        </select>
        <label htmlFor="amount-of-pages" className='margin-for-labels'>Amount of found articles: {totalResults}</label>
      </div>
    </>
  );
}

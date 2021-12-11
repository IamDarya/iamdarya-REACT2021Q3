import reducer, {
  changeArticles,
  changeIsLoading,
  changeTotalResults,
  changeValue,
} from "./slice";

describe("main", () => {
  it("slice should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: false,
    });
  });

  it("slice should change value with a provided one", () => {
    const previousState = {
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: false,
    };
    expect(reducer(previousState, changeValue("something to search"))).toEqual({
      value: "something to search",
      totalResults: 0,
      articles: [],
      isLoading: false,
    });
  });

  it("slice should change total result with a provided one", () => {
    const previousState = {
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: false,
    };
    expect(reducer(previousState, changeTotalResults(5))).toEqual({
      value: "",
      totalResults: 5,
      articles: [],
      isLoading: false,
    });
  });

  it("slice should change articles with a provided one", () => {
    const previousState = {
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: false,
    };
    expect(
      reducer(
        previousState,
        changeArticles([
          {
            author: "Author",
            content: "Content",
            description: "Description",
            publishedAt: "10.01.2021",
            source: {
              id: "1",
              name: "BBC.com",
            },
            title: "Title",
            url: "",
            urlToImage: "",
          },
        ])
      )
    ).toEqual({
      value: "",
      totalResults: 0,
      articles: [
        {
          author: "Author",
          content: "Content",
          description: "Description",
          publishedAt: "10.01.2021",
          source: {
            id: "1",
            name: "BBC.com",
          },
          title: "Title",
          url: "",
          urlToImage: "",
        },
      ],
      isLoading: false,
    });
  });

  it("slice should change isLoading value with a provided one", () => {
    const previousState = {
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: false,
    };
    expect(reducer(previousState, changeIsLoading(true))).toEqual({
      value: "",
      totalResults: 0,
      articles: [],
      isLoading: true,
    });
  });
});

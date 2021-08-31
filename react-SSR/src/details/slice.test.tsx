import reducer, { changeArticle } from "./slice";

it("slice should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    article: [],
  });
});

it("slice should change article with a provided one", () => {
  const previousState = { article: [] };
  expect(
    reducer(
      previousState,
      changeArticle([
        {
          source: { id: "1", name: "Digital Trends" },
          author: "Jacob Silver",
          title:
            "Hisense 65-inch 4K TVs are insanely cheap at Best Buy right now",
          description:
            "Right now at Best Buy, you can get the Hisense 65-inch Class UG6 Series Quantum ULED 4K UHD Smart Android TV for just $700.",
          url: "https://www.digitaltrends.com/dtdeals/hisense-65-inch-4k-tv-sony-65-inch-4k-google-tv-deal-best-buy-august-2021/",
          urlToImage:
            "https://icdn.digitaltrends.com/image/digitaltrends/sony-55-class-x85j-series-led-4k-uhd-smart-google-tv.jpg",
          publishedAt: "2021-08-26T21:04:37Z",
          content:
            "This time of year presents a dual opportunity to enjoy great new 4K TVs. Its the perfect time of year to relax in the air conditioning while watching something great, and back-to-school sales are bri… [+2665 chars]",
        },
      ])
    )
  ).toEqual({
    article: [
      {
        source: { id: "1", name: "Digital Trends" },
        author: "Jacob Silver",
        title:
          "Hisense 65-inch 4K TVs are insanely cheap at Best Buy right now",
        description:
          "Right now at Best Buy, you can get the Hisense 65-inch Class UG6 Series Quantum ULED 4K UHD Smart Android TV for just $700.",
        url: "https://www.digitaltrends.com/dtdeals/hisense-65-inch-4k-tv-sony-65-inch-4k-google-tv-deal-best-buy-august-2021/",
        urlToImage:
          "https://icdn.digitaltrends.com/image/digitaltrends/sony-55-class-x85j-series-led-4k-uhd-smart-google-tv.jpg",
        publishedAt: "2021-08-26T21:04:37Z",
        content:
          "This time of year presents a dual opportunity to enjoy great new 4K TVs. Its the perfect time of year to relax in the air conditioning while watching something great, and back-to-school sales are bri… [+2665 chars]",
      },
    ],
  });
});

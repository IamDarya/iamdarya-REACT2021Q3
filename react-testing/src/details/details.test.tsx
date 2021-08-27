import axios from "axios";
import { render, screen } from "@testing-library/react";
import { FixBugDetails } from "./details";

const mockedAxios = jest.genMockFromModule("axios") as jest.Mocked<
  typeof axios
>;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "Hisense 65-inch 4K TVs are insanely cheap at Best Buy right now",
    date: "2021-08-26T21:04:37Z",
  }),
  useRouteMatch: () => ({ url: "/details/:id/:date" }),
}));

beforeAll(() => {
  mockedAxios.create = jest.fn(() => mockedAxios);
});

it("details have date and id", async () => {
  const response = {
    status: "ok",
    totalResults: 1,
    articles: [
      {
        source: { id: null, name: "Digital Trends" },
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
  };
  mockedAxios.get.mockResolvedValue({ data: response });
  const post = render(FixBugDetails());
  const htmlEl = (await screen.findByAltText("image")) as HTMLImageElement;
  expect(htmlEl.src).toBe(
    "https://icdn.digitaltrends.com/image/digitaltrends/sony-55-class-x85j-series-led-4k-uhd-smart-google-tv.jpg"
  );
  expect(post).not.toBe(null);
  expect(post).not.toBe(undefined);
});

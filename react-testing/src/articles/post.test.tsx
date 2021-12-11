import { render } from "@testing-library/react";
import { FixBugPost } from "./post";

const MyProps = {
  author: "Author",
  content: "Content",
  description: "Description",
  publishedAt: "10.01.2021",
  source: {
    id: "1",
    name: "BBC.com",
  },
  title: "Title",
  url: "https://www.newscientist.com/article/2237475-covid-19-news-nhs-england-prepares-to-vaccinate-children-aged-12-15/",
  urlToImage:
    "https://images.newscientist.com/wp-content/uploads/2021/08/26111912/pri196391010.jpg",
};

const MyPropsNoImg = {
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
  urlToImage: null,
};

it("if image exist", () => {
  const post = render(FixBugPost(MyProps));
  const image = post.getByTestId("image") as HTMLImageElement;
  expect(image.src).toBe(MyProps.urlToImage);
});

it(`if image doesn't exist`, () => {
  const post = render(FixBugPost(MyPropsNoImg));
  const image = post.getByTestId("image") as HTMLImageElement;
  expect(image.src).toBe(
    "https://image.flaticon.com/icons/png/512/4441/4441676.png"
  );
});

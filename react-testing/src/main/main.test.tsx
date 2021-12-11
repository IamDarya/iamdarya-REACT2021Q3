import { render, fireEvent } from "@testing-library/react";
import { FixBugSearchBar } from "./main";

it("handle change", () => {
  const main = render(FixBugSearchBar());
  const searchValue = main.getByTestId("search-value") as HTMLInputElement;
  fireEvent.change(searchValue, {
    target: { value: "some random text for searching" },
  });
  expect(searchValue.value).not.toBe("");
  expect(searchValue.value).toBe("some random text for searching");
});

// it('handle submit', ()=> {
//   let main = render(FixBugSearchBar());
//   let clickSearch = main.getByTestId('form-submit');
//   fireEvent.click(clickSearch);

// })

// it('get articles from API', ()=> {
//   let main = render(FixBugSearchBar());

// google how to test setState
// })

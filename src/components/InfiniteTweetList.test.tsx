import { afterEach, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import {} from "vitest";
import { InfiniteTweetList } from "./InfiniteTweetList";

describe("InfiniteTweetList", () => {
  afterEach(cleanup);

  it("should render empty list if no tweets", () => {
    render(
      <InfiniteTweetList
        isLoading={false}
        isError={false}
        hasMore={false}
        fetchNewTweets={() => new Promise((resolve, reject) => reject(""))}
        tweets={[]}
      />
    );

    screen.getByText("No tweets");
  });

  it("should render error message", () => {
    render(
      <InfiniteTweetList
        isLoading={false}
        isError={true}
        hasMore={false}
        fetchNewTweets={() => new Promise((resolve, reject) => reject(""))}
        tweets={[]}
      />
    );

    screen.getByText(/Error/);
  });

  it("should render spinner", () => {
    render(
      <InfiniteTweetList
        isLoading={true}
        isError={false}
        hasMore={false}
        fetchNewTweets={() => new Promise((resolve, reject) => reject(""))}
        tweets={[]}
      />
    );

    screen.getByRole("loader");
  });

  // it("should render tweets", () => {
  //   render(
  //     <InfiniteTweetList
  //       isLoading={false}
  //       isError={false}
  //       hasMore={false}
  //       fetchNewTweets={() => new Promise((resolve, reject) => reject(""))}
  //       tweets={[
  //         {
  //           id: "1",
  //           content: "Hello world",
  //           user: { id: "1", name: "John Doe", image: null },
  //           createdAt: new Date("2021-01-01"),
  //           likeCount: 2,
  //           likedByMe: true,
  //         },
  //       ]}
  //     />
  //   );

  //   screen.getByText("Hello world");
  // });

  // it("should render heart icon liked by me", () => {
  //   const onClick = vi.fn();
  //   const session = renderHook(() => useSession());
  //   render(
  //     <HeartButton
  //       isLoading={false}
  //       onClick={onClick}
  //       likeCount={1}
  //       likedByMe={true}
  //     />
  //   );

  //   screen.getByLabelText(/unlike/i);
  // });
});

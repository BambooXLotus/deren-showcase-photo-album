import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import PhotoGrid from "./PhotoGrid";

const queryClient = new QueryClient();
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

vi.mock("next/font/google", () => ({
  Permanent_Marker: () => ({
    className: "className",
  }),
}));

const expectedPhotos = [
  {
    albumId: 3,
    id: 1,
    title: "photo 1",
    url: "https://example.com/photo1.jpg",
    thumbnailUrl: "https://example.com/photo1_thumb.jpg",
  },
  {
    albumId: 3,
    id: 2,
    title: "photo 2",
    url: "https://example.com/photo2.jpg",
    thumbnailUrl: "https://example.com/photo2_thumb.jpg",
  },
];

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/photos", (req, res, ctx) => {
    return res(ctx.json(expectedPhotos));
  })
);

// Start the server before running your tests
beforeAll(() => server.listen());

// Stop the server after your tests
afterAll(() => server.close());

describe("<PhotoGrid / >", () => {
  it("should render successfully photo titles", () => {
    render(
      <Wrapper>
        <PhotoGrid />
      </Wrapper>
    );

    for (const photo of expectedPhotos) {
      expect(screen.findByText(`${photo.id}) ${photo.title}`)).toBeTruthy();
    }
  });
});

"use client";

import { EmptyFavorites } from "./empty-favorits";
import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./mpty-board";

interface BoardListPageProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardListPage = ({ query }: BoardListPageProps) => {
  const data = []; //  TODO : Api call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div className="">{JSON.stringify(query)}</div>;
};

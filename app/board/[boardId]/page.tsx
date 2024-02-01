"use client";

import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { Room } from "./_components/room";

interface BoardProps {
  params: {
    boardId: string;
  };
}

export default function BoardIdPage({ params }: BoardProps) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}

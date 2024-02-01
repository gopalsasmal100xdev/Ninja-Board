"use client";

import { Canvas } from "./_components/canvas";

interface BoardProps {
    params : {
        boardId: string
    }
}

export default function BoardIdPage({params}: BoardProps) {
  return (
      <Canvas boardId={params.boardId}/>
  );
}

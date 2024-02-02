import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { ToolButton } from "./tool-button";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          icon={MousePointer2}
          label="Select"
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          icon={Type}
          label="Text"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={StickyNote}
          label="Sticky note"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Square}
          label="Rectangle"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Circle}
          label="Ellipse"
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          icon={Pencil}
          label="Pen"
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          icon={Undo2}
          label="Undo"
          onClick={() => {}}
          isDisabled={true}
        />
        <ToolButton
          icon={Redo2}
          label="Redo"
          onClick={() => {}}
          isDisabled={true}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};

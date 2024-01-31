import Image from "next/image";

export function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src={"/ninja.svg"}
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
}

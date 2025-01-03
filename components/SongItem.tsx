"use client";

import Image from "next/image";
import { Audio } from "react-loader-spinner";
import usePlayer from "@/hooks/usePlayer";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

interface SongItemProps {
    onClick: (id: string) => void;
    data: Song
}

const SongItem: React.FC<SongItemProps> = ({
    onClick,
    data
}) => {
    const player = usePlayer();
    const isPlaying = (player.activeId === data.id) && !player.paused;

    const imagePath = useLoadImage(data);

    return (
        <div
            onClick={() => onClick(data.id)}
            className="
          relative
          group
          flex
          flex-col
          items-center
          rounded-md
          overflow-hidden
          gap-x-4
          bg-neutral-400/5
          cursor-pointer
          hover:bg-neutral-400/10
          transition
          p-3
        "
        >
            <div
                className="
              relative
              aspect-square
              w-full
              h-full
              rounded-md
              overflow-hidden
            "
            >
                <Image
                    className="object-cover"
                    src={imagePath || '/images/liked.pmg'}
                    fill
                    alt="Image"
                />

            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {data.title}
                </p>
                <p
                    className="
                      text-neutral-400
                        text-sm
                        pb-4
                        w-full
                        truncate
                    "
                >
                    By {data.author}
                </p>
                <div className=" absolute bottom-[6px] right-3">
                    <Audio height="30" width="10" color="#22c55e" visible={isPlaying} />
                </div>
            </div>
            <div className="absolute bottom-24 right-5">
                <PlayButton />
            </div>
        </div>
    );
}

export default SongItem;
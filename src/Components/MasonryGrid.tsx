import Image from "next/image";
import React from "react";
import { type PhotoType } from "~/types/Photo";

type MasonryGridProps = {
  photos: PhotoType[] | undefined;
};

const MasonryGrid: React.FC<MasonryGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {photos?.map((photo) => (
        <div
          key={photo.id}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="flex h-full w-full transform flex-col items-center justify-center bg-white p-4 transition-all duration-500 ease-in-out group-hover:-translate-y-2">
            <Image
              src={photo.url}
              alt={photo.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="mt-2 text-center text-sm font-bold text-gray-900">
              {photo.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

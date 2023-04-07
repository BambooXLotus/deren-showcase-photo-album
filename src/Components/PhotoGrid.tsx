import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { type PhotoType } from "~/types/Photo";
import Poloroid from "./Poloroid";

type PhotoGridProps = {
  photos: PhotoType[] | undefined;
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {photos?.map((photo) => (
        <Poloroid photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default PhotoGrid;

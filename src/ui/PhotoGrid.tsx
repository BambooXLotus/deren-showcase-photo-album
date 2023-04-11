import { useQuery } from "@tanstack/react-query";
import { type PhotoType } from "~/types/Photo";

import Poloroid from "./Poloroid";

const PhotoGrid: React.FC = () => {
  const { data: photos } = useQuery<PhotoType[]>({
    queryKey: ["photoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=3").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {photos?.map((photo) => (
        <Poloroid photo={photo} key={photo.id} />
      ))}
    </div>
  );
};

export default PhotoGrid;

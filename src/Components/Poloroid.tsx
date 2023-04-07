import { Permanent_Marker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { type PhotoType } from "~/types/Photo";

const permMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

type PoloroidProps = {
  photo: PhotoType;
};

const Poloroid: React.FC<PoloroidProps> = ({ photo }) => {
  return (
    <Link
      className=" flex w-72 flex-col rounded-sm bg-slate-200 p-2 pb-8 shadow-md shadow-black/40 duration-300 ease-in-out hover:-translate-y-3 hover:-rotate-1 hover:shadow-xl hover:shadow-black/40"
      href={photo.url}
      target="_blank"
    >
      <Image
        className="h-full w-full"
        src={photo.url}
        alt={photo.thumbnailUrl}
        width={150}
        height={150}
      />
      <div className={`${permMarker.className} h-24 text-lg`}>
        {`${photo.id}) ${photo.title}`}
      </div>
    </Link>
  );
};

export default Poloroid;

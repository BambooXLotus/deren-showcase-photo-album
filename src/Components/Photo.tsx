import React from "react";

type PhotoProps = {
  url: string;
  title: string;
};

const Photo: React.FC<PhotoProps> = ({ url, title }) => {
  return (
    <div className="relative h-72 w-64">
      <img
        className="h-full w-full rounded-2xl object-cover"
        src={url}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 px-4 py-2 backdrop-blur-xl">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-gray-200 bg-white"></div>
      <div className="absolute right-0 top-0 -mr-4 -mt-4 h-8 w-8 rounded-full border-2 border-gray-200 bg-white"></div>
    </div>
  );
};

export default Photo;

import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <Image
        src="https://picsum.photos/seed/picsum/200/300"
        alt="img"
        width={500}
        height={500}
      />
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="img"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;

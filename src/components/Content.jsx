import Categories from "./Categories";
import Video from "./Video";

export default function Content() {
  const videos = [
    {
      image:
        "https://picsum.photos/200/300",
      title: "Imagen Aleatoria, como? 1",
      channel: "Marques Brownlee",
    },
    {
      image:
        "https://picsum.photos/id/870/200/300?grayscale&blur=2",
      title: "Como sobreviven las personas en los faros, solos!",
      channel: "Canal 1",
    },
    {
      image:
        "https://picsum.photos/seed/picsum/200/300",
      title: "Imagenes aleatorias estaticas!!",
      channel: "Canal 2",
    },
    {
      image:
        "https://picsum.photos/id/237/200/300",
      title: "Como instalar linux",
    },
  ];

  return (
    <section className="col-start-2 col-end-3 row-start-2 row-end-3">
      <Categories />
      <section className="grid grid-cols-4 gap-4 pt-4">
        {videos.map((video) => {
          return (
            <Video
              key={`video-${video.title}`}
              image={video.image}
              title={video.title}
              channel={video.channel}
              className="bg-white shadow-md rounded p-4"
            />
          );
        })}
      </section>
    </section>
  );
}
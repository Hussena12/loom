import Header from "@/components/Header";
import { dummyCards } from "@/constants";
import VideoCard from "@/components/VideoCard";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="hussenaliseid6@gmail.com"
        title="Hussen | Ali"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default page;

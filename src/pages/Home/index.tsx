import { useDemoQuery } from "@/queries/demo";

const Home = () => {
  const demoQuery = useDemoQuery()

  console.log("demoQuery", demoQuery)

  return (
    <>
      <h1 className="text-[20px]">Minh toàn hehe</h1>
    </>
  );
};

export default Home;

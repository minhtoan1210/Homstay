import { useDemoQuery } from "@/queries/demo";
import ComponentTable from "./componentTable";

const Home = () => {
  const demoQuery = useDemoQuery()

  console.log("demoQuery", demoQuery)

  return (
    <>
      <h1 className="text-[20px]">Minh toàn Heasdasdshe</h1>
      <ComponentTable />
      <div>
    </div>
    </>
  );
};

export default Home;

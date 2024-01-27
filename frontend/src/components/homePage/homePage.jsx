import WeblogDetails from "../carousel/weblogDetails";
import CategoryCard from "./category/categotyCard";
import Gauid from "./gauid/gauid";
import Landing from "./landing/landing";
import Services from "./services/services";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <CategoryCard />
      <Services />
      <WeblogDetails />
      <Gauid />
    </div>
  );
};
export default HomePage;

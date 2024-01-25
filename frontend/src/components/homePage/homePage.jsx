import CategoryCard from "./category/categotyCard";
import Gauid from "./gauid/gauid";
import Landing from "./landing/landing";
import Services from "./services/services";
import SpecialOffers from "./specialOffers/special offers";
import WeblogDetails from "./weblogs/weblogDetails";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <CategoryCard />
      <SpecialOffers />
      <Services />
      <WeblogDetails />
      <Gauid />
    </div>
  );
};
export default HomePage;

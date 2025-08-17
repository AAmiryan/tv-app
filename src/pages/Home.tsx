import LeftMenu from "../components/Menu";
import Moves from "../components/Moves";
import { ContentContainer, HomeContainer } from "./styled";


const Home: React.FC = () => {
  return (
    <HomeContainer>
      <LeftMenu />
      <ContentContainer>
        <Moves />
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;

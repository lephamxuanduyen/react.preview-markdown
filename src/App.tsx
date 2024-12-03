import { Link } from "@chakra-ui/react";
import { RandomQuote } from "./components/RandomQuote";
import { getRandomColor } from "./theme/colors";
import { Col } from "./components/elements/Col";

const App: React.FC = () => {
  const color = getRandomColor()
  return (
    <Col className="App"
      w={'100vw'}
      h={'100vh'}
      bgColor={color}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      fontFamily={'Raleway, sans-serif'}
    >
      <RandomQuote color={color} id="quote-box" />
      <Link href="https://codepen.io/hezag/" cursor={'pointer'} color={'#fff'}>
        by hezag
      </Link>
    </Col>
  );
}

export default App;

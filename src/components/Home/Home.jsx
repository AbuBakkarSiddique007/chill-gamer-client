import Slider from '../MainSection/Slider';
import Footer from '../Pages/Footer';
import TopRatedGames from '../Pages/TopRatedGames';
import ComingSoonSection from '../Pages/ComingSoonSection ';
import WishlistForm from '../Pages/WishlistForm ';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopRatedGames></TopRatedGames>
            <ComingSoonSection></ComingSoonSection>
            <WishlistForm></WishlistForm>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;
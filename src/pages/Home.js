import {queenWhite} from '../assets/images/index'

const Home = (props) => {
    return (
        <div>
            <div>
                <h1>Redux Chess</h1>
                <img src={queenWhite} alt={'queen'} />
            </div>
        </div>
    );
}

export default Home;
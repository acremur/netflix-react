import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Row/Row'
import requests from '../../utils/requests'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <Banner />
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetlixOriginals} isLargeRow />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Home
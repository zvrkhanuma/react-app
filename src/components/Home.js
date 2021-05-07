import logo from '../assets/images/logo.png';

const styles = {
    image: {
        width: '150px'
    },
    title: {
        fontSize: '2em'
    }
}
const Home = () => {
    return (
        <div className='container'>
            <img src={logo} alt='logo' style={styles.image} />
            <div style={styles.titlle}>Welcome to my First ReactApp</div>
        </div>
    )
}

export default Home;
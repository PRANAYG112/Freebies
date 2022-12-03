import './App.css';
import NavBar from './components/NavBar'
import MidSection from './components/MidSection'
import Footer from './components/Footer';

function App() {
    return (<>
        <NavBar />
        <div className='container'>
            <MidSection />
            <Footer />
        </div>
    </>
    );
}
export default App;



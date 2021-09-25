import AOS from 'aos';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainHome from './components/Fontend/MainHome/MainHome';
=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DentalCare from './component/Dental_Care/DentalCare';
import AboutUs from './component/Home_about/AboutUs';
import MainContact from './component/Home_Contact/MainContact';
import Mainfooter from './component/Home_Footer/Mainfooter';
import HomeHeader from './component/Home_Header/HomeHeader';
import Review from './component/Home_Review/Review';
import Services from './component/Home_Services/Services';
>>>>>>> 61a0b400926c7d0bf5f3202e50bcf024830203a9

function App() {
    AOS.init();
    return (
<<<<<<< HEAD
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainHome />
                </Route>
            </Switch>
        </Router>
=======
        <div>
            <HomeHeader />
            <Services />
            <DentalCare />
            <AboutUs />
            <Review />
            <MainContact />
            <Mainfooter />
        </div>
>>>>>>> 61a0b400926c7d0bf5f3202e50bcf024830203a9
    );
}

export default App;

import OutstationPackageComponent from '../components/OutstationPackageComponent';
import PerDayRentalComponent from '../components/PerDayRentalComponent';
import LocalPackageComponent from '../components/LocalPackageComponent';

const TravelPlan = () => {
   

    return (
        <div>
            <h1>Travel Packages</h1>
            <LocalPackageComponent />
            <OutstationPackageComponent />
            <PerDayRentalComponent />
            {/* Add more components as needed */}
        </div>
    );
};

export default TravelPlan;

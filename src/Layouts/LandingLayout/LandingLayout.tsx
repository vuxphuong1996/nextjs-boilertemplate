import {TopBar} from '@Components';

const LandingLayout = ({ children }) => {
    return (
        <div>
            <TopBar />
        {children}  
    </div>
    )
};

export default LandingLayout;

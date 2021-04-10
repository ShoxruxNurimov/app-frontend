import React from 'react';
import {PageTemplate,Header, PolyBackground, Block} from '../../../components';
import Typical from 'react-typical';

const HomePage = () =>{
    return(
        <PageTemplate 
            header={<Header/>}
            // responsive
        >
            <PolyBackground>
                <Block center shadow>
                    <Typical
                        steps={['Legendery cryptoassist exchange', 1000, 'Trade on Joincoin!', 500]}
                        loop={Infinity}
                        wrapper="h1"
                    />
                </Block>
            </PolyBackground>
        </PageTemplate>
    );
};

export default HomePage;
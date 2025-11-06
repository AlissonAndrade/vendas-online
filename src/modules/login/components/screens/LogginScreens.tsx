import { 
    Body, 
    BackgroundImage, 
    ContentLoggin, 
    LogginImage, 
    LimitLoggin } 
from "../styles/LogginStyles";

import Input from '../../../../../src/shared/inputs/input/input.tsx';

const LogginScreens = () => {

    return (
        
            <div>
                <BackgroundImage src={`${import.meta.env.BASE_URL}/background.png`} />
                <Body/>
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src={`${import.meta.env.BASE_URL}/luffynho.png`} />
                        <Input title="USUÁRIO"/>
                        <Input title="SENHA"/>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;
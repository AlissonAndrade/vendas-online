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
                <BackgroundImage src={`${import.meta.env.BASE_URL}/imagens/background.png`} />
                <Body/>
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src={`${import.meta.env.BASE_URL}/imagens/luffynho.png`} />
                        <Input title="USUÁRIO"/>
                        <Input title="SENHA"/>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;
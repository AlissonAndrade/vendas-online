import { 
    Body, 
    BackgroundImage, 
    ContentLoggin, 
    LogginImage, 
    LimitLoggin } 
from "../styles/LogginStyles";

import Input from 'C:/Users/Renan/OneDrive/Desktop/PROJETOS/vendas-online/vendas-online/src/shared/inputs/input/input.tsx';

const LogginScreens = () => {

    return (
        
            <div>
                <BackgroundImage src="./vendas-online/public/background.png"/>
                <Body/>
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src="./vendas-online/public/luffynho.png"/>
                        <Input title="USUÁRIO"/>
                        <Input title="SENHA"/>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;
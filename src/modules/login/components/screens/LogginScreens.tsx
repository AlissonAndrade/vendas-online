import { 
    Body, 
    BackgroundImage, 
    ContentLoggin, 
    LogginImage, 
    LimitLoggin,
    Loginlog 
} 
from "../styles/LogginStyles";

import Input from '../../../../../src/shared/inputs/input/input.tsx';
import Button from "../../../../shared/buttons/buttons/Buttons.tsx";

const LogginScreens = () => {

    return (
        
            <div>
                <BackgroundImage src="/vendas-online/public/imagens/background.png" />
                <Body/>
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src="/vendas-online/public/imagens/luffynho.png"/>
                        <Loginlog level={2}>LOGIN</Loginlog>
                        <Input title="USUÁRIO:"/>
                        <Input title="SENHA:"/>
                        <Button type="primary" margin="64px 0 16px 0px">ENTRAR</Button>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;

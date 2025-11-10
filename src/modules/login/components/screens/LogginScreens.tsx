import React, { useState } from 'react';
import { 
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

    const [username, setUsername] = useState('');

    function handlerUsername(e: React.ChangeEvent<HTMLInputElement>) {
     setUsername(e.target.value);
    }

    const [password, setPassword] = useState('');

    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    };


    return (
        
            <div>
                <BackgroundImage src="/vendas-online/public/imagens/background.png" />
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src="/vendas-online/public/imagens/luffynho.png"/>
                        <Loginlog level={2}>LOGIN</Loginlog>
                        <Input title="USUÁRIO:" onChange={handlerUsername} value={username}/>
                        <Input title="SENHA:" type='password' onChange={handlerPassword} value={password}/>
                        <Button type="primary" margin="64px 0 16px 0px">ENTRAR</Button>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;

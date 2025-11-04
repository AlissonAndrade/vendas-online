import {Body} from "../styles/LogginStyles";
import { BackgroundImage } from "../styles/LogginStyles";
import {ContentLoggin} from "../styles/LogginStyles";
import {LogginImage} from "../styles/LogginStyles";
import {LimitLoggin} from "../styles/LogginStyles";

const LogginScreens = () => {

    return (
        
            <div>
                <BackgroundImage src="./vendas-online/public/background.png"/>
                <Body/>
                <ContentLoggin>
                    <LimitLoggin>
                        <LogginImage src="./vendas-online/public/luffynho.png"/>
                    </LimitLoggin>
                </ContentLoggin>
            </div>
        
    );
};

export default LogginScreens;
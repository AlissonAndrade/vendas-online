import type { InputProps as InputPropsAntd } from 'antd/es/input';
import InputAntd from 'antd/es/input';

import { BoxInput, TitleInput } from './input-style.ts';

interface InputProps extends InputPropsAntd{
    title?: string;
}

const Input = ({title, ...props}: InputProps) => {
   
    return (
        <BoxInput>
            {title && <TitleInput>{title}</TitleInput>}
            <InputAntd {...props}/>
        </BoxInput>
        
    );
};

export default Input;
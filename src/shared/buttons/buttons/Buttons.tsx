import React from 'react';
import type { ButtonProps } from "antd"
import { ButtonAntd } from "./Button.styles"

interface ButtonsCurrentProps extends ButtonProps {
    margin?: string;
}

const Button = ({margin, ...props}: ButtonsCurrentProps) => {
    return (
        <ButtonAntd style={ { margin} } {...props}/>
    );
};

export default Button;
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const BackgroundImage = styled.img`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    `;

export const ContentLoggin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
    position: absolute;
    width: 100%;
    max-width: 646px;
    height: 100vh;
    right: 0;
    top: 0;
    z-index: 2;
    `;


export const LogginImage = styled.img`
    height: 300px;
    width: 300px;
    display: flex;
    align-self: center;
    `;

export const Loginlog = styled(Title)`
    color: blue;
`;

export const LimitLoggin = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
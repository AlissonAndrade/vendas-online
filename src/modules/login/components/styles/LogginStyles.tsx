import styled from "styled-components";

export const Body = styled.body`
    margin: 0px;
    padding: 0px;
    `;

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
    padding: 0 100px;
    margin-bottom: 10px;
    `;

export const LimitLoggin = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;
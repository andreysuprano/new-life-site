import styled from "styled-components";

interface ContainerMenuProps {
    active:boolean;
}

export const Container = styled.div<ContainerMenuProps>`
    background: rgba(21, 49, 114, 0.9);
    width: 100vw;
    height: 100vh;
    top:0;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: flex-end;
    overflow-y: hidden;
    display: ${props => props.active ? 'flex' : 'none'};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 80vw;
    height: auto;
    padding: 100px;
    @media (max-width:767px){
        padding: 80px;
    }
`;

export const LinksBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 50px;
`;

export const Links = styled.a`
    text-decoration: none;
    color: white;
    font-size: 24px;
    margin-bottom: 25px;
    &:hover {
        color:${props => props.theme.primary};
        background-color: white;
        transition:0.3s;
        border-radius: 15px;
        padding: 10px;
    }
`;
import styled from 'styled-components';

export const Nav = styled.nav`
    width:100%;
    height: 100px;
    background-color:${props => props.theme.backgroundGrey};
    display:flex;
    justify-content: center;
    @media (min-width: 768px) and (max-width:1023px){
    }
`;

export const Container = styled.nav`
    width:80%;
    display:flex;
    align-items:center;
    justify-content: space-around;
    @media (max-width:767px){
    }
`;

export const BrandContainer = styled.div`

`;

export const MenuContainer = styled.div`
    @media (min-width: 768px) and (max-width:1023px){
        visibility: hidden;
    }
    @media (max-width:767px){
        visibility: hidden;
    }
`;

export const BtnMenuContainer = styled.div`
    display:flex;
    align-items:center;
    @media (min-width: 768px) and (max-width:1023px){
        visibility: hidden;
    }
    @media (max-width:767px){
        visibility: hidden;
    }
`;

export const NavButton = styled.button`
    padding:15px;
    border-radius:15px;
    border:none;
    background-color:#FFF;
    color:${props => props.theme.primary};
    font-weight:600;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    &:hover {
        color:#fff;
        background-color:${props => props.theme.primary};
        transition:0.5s;
    }
`;

export const NavLink = styled.a`
    text-decoration:none;
    margin-right:25px;
    font-size: 18px;
    color:${props => props.theme.primary};
    font-weight:500;
`
export const MenuHarmburger = styled.button`
    display:flex;
    align-items:center;
    visibility: hidden;
    border: none;
    background-color: #fff;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    @media (min-width: 768px) and (max-width:1023px){
        visibility: visible;
    }
    @media (max-width:767px){
        visibility: visible;
    }
`;
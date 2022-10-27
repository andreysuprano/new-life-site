import styled from 'styled-components';

export const Nav = styled.nav`
    width:100%;
    height: 100px;
    background-color:${props => props.theme.backgroundGrey};
    display:flex;
    justify-content: center;
`;

export const Container = styled.nav`
    width:80vw;
    display:flex;
    align-items:center;
    justify-content: space-around;
`;

export const BrandContainer = styled.div`

`;

export const MenuContainer = styled.div`
`;

export const BtnMenuContainer = styled.div`
    display:flex;
    align-items:center;
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
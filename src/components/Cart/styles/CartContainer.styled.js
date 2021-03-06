import styled from "styled-components";
import CartContainer from "../CartContainer";

export const StyledCartContainer = styled(CartContainer)`
    
    margin: 5rem auto;
    width:100vw;

    text-align:center;

    h2{
        padding: 1rem;
    }
    
    .back{

        cursor: pointer;

        div{
            width: 100%;
            height:100%;
        }
        
        font-size: 2rem;
        
        color: ${({ theme }) => theme.colors.main};

        text-decoration:none;
    }

    @media (min-width: 725px){
        width:80vw;
    }
    @media (min-width: 1100px){
        width:60vw;
    }
`
import styled from "styled-components";
import ItemListContainer from "../ItemListContainer";

export const StyledItemListContainer = styled(ItemListContainer)`
    text-align: center;
    color: ${({theme}) => theme.colors.main};
    background-color: ${({theme}) => theme.colors.primary};
`;

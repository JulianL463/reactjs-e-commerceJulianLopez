import styled from "styled-components";
import ItemDetail from "../ItemDetail";

export const StyledItemDetail = styled(ItemDetail)`
    
    max-width: 60rem;
    padding: 5px;
    margin:auto;
    
    color: ${({ theme }) => theme.colors.main};

    h2{
        font-size: 2rem;
    }

    h3{
        font-size: 1.7rem;
    }

    h5{
        font-size: 1.5rem;
    }



    .detailContainer{

        display: grid;
        grid-template-rows: 1fr 1fr;
        width:100%;

        .imgsContainer{
            display:grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr 2fr 4fr 2fr;
            grid-gap: 5px;

            margin-bottom: 5px;

            max-height:40rem;
   
            
            div{
                display:flex;
                align-items:center;
                justify-content:center;

                background-color:black;
                box-sizing:border-box;
                border: 1px solid ${({ theme }) => theme.colors.transparent.lightblue};
                overflow: hidden;
            }
            div:first-child{
                grid-column: 1 / 5 ;
                grid-row: 1 / 4;
            }
            img{
                height:70%;
                width:auto;
            }
            
        }
        .dataContainer{
            display:grid;
            
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 4fr 1fr;
            grid-gap: 5px;

            max-height:40rem;

            
            .itemTitle{
                width:100%;
                height:100px;

                display:flex;
                align-items:center;
                justify-content:center;
                
            }
            .itemPrice{
                width:100%;
                height:auto;

                display:flex;
                align-items:center;
                justify-content:center;
            }
            
            .itemDescription{
                width:100%;
                height:auto;
                
                p{
                    padding: 1rem;
                    text-align: justify;
                }
            }
            
        }   

        @media (min-width: 1100px){
             grid-template-columns: 1fr 1fr;
             grid-template-rows: 1fr;
             .imgsContainer{
                 margin-bottom:0;
                 margin-right: 5px;
                 width:auto;

                img{
                    height:100%;
                }
             }
             
        }
    }
    
`


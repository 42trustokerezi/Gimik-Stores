import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import styled from 'styled-components';
import Footer from '../components/Footer';

import nokia_dual from '../images/nokia_2.4_dual_sim.jpeg';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:200
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle  = styled.div``
const SummaryItem  = styled.div``
const SummaryItemText  = styled.span``
const SummaryItemPrice  = styled.span``
const SummaryButton  = styled.button``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>

                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>

                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={nokia_dual}/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSE THUNDER SHOES </ProductName>
                                    <ProductId><b>ID:</b> 90388574567 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5 </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount> 
                                  <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> 80,000.00 NGN</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={nokia_dual}/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSE THUNDER SHOES </ProductName>
                                    <ProductId><b>ID:</b> 90388574567 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5 </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                  <Add/>
                                  <ProductAmount>2</ProductAmount> 
                                  <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> 80,000.00 NGN</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemText>160,000.00 NGN</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Delivery</SummaryItemText>
                        <SummaryItemText>2,000.00 NGN</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Delivery Discount</SummaryItemText>
                        <SummaryItemText>-200.00 NGN</SummaryItemText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemText>160,000.00 NGN</SummaryItemText>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart

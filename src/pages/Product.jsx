import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import iphone_13 from '../images/iphone_13.jpeg'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px',flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 20px;
    ${mobile({padding: "10px"})}
`
const Image = styled.img`
    width: 80%;
    height: 70vh;
    object-fit: fit;
    ${mobile({height: "40vh"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.p`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterStrg = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterStrgOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={iphone_13}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>IPhone 13</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Mollitia voluptatibus eius temporibus iure voluptate placeat voluptas nesciunt 
                            labore quas aliquam hic suscipit vel tenetur sint repellat repudiandae, 
                            soluta, doloribus modi commodi a eum? Accusantium cupiditate possimus dolore quia dignissimos vitae, commodi minus placeat distinctio, 
                            molestiae nemo id qui reiciendis blanditiis!
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Storage</FilterTitle>
                            <FilterStrg>
                                <FilterStrgOption>64GB</FilterStrgOption>
                                <FilterStrgOption>128GB</FilterStrgOption>
                                <FilterStrgOption>256GB</FilterStrgOption>
                            </FilterStrg>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product

import React from 'react';
import {
    CardContainer, CardHeading, CardWrapper, Card,  CardImg, CardInfo, CardTitle,CardDesc,CardButton 
} from './ProductCardsElements'

const ProductCards = ({data}) => {
    return (
        <CardContainer>
            <CardHeading>
                Wassup
            </CardHeading>
            <CardWrapper>

                {data.map((productCard, index)=>{
                    return(
                        <Card key = {index}>
                            <CardImg src={productCard.img} alt={productCard.alt} />
                            <CardInfo>
                                <CardTitle>{productCard.name}</CardTitle>
                                <CardDesc>{productCard.desc}</CardDesc>
                                <CardButton>{productCard.button}</CardButton>
                            </CardInfo>

                        </Card>
                    )
                })}
            </CardWrapper>
        </CardContainer>
    )
}

export default ProductCards

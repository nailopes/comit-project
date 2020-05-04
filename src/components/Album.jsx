import React from 'react';
import {
    
    ButtonGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Container,
    Row
} from 'reactstrap';


const Album = ({ album }) => {
    return (
        <div className="album py-5 bg-light">
            <Container>
                <Row>
                    {album.map((item, key) => {
                        return (
                            <Col md="4" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={item.src}
                                        alt={item.altText}
                                    />
                                    <CardBody>
                                        <CardText>{item.description}</CardText>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ButtonGroup>
                                              
                                            <a style={{textAlign:"center", outlineStyle:"solid" ,outlineColor:"gray", opacity:"0.5"}} href={item.href} class="btn" target="_blank" rel="noopener noreferrer">View</a>
                                                
                                            </ButtonGroup>
                                            <small className="text-muted">
                                                {item.time}
                                            </small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Album;

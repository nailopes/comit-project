import React from 'react';
import Album from './Album';
import {  Container, Jumbotron } from 'reactstrap';

const Main = ({ album, totalNumberOfAnimals, calgaryNumberOfAnimals, isLoaded }) => {

    return (
        <main role="main">
            <Jumbotron className="text-center">
        
                <Container hidden={!isLoaded}>
                    <h1 className="jumbotron-heading">There are at least {totalNumberOfAnimals}  pets avaible for adoption in North America. {calgaryNumberOfAnimals} of them are in Calgary. </h1>
                    <p className="lead text-muted">
                        According to Petfinder.
                    </p>
                    <h1 className="jumbotron-heading">Check out some shelters in Calgary</h1>
                </Container>
            </Jumbotron>
            <Album album={album} />
        </main>
    );
};

export default Main;

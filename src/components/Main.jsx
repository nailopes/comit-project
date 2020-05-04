import React from 'react';
import Album from './Album';
import {  Container, Jumbotron } from 'reactstrap';

const Main = ({ album, totalNumberOfAnimals, calgaryNumberOfAnimals, isLoaded }) => {

    return (
        <main role="main">
            <Jumbotron className="text-center">
        
                <Container >
                    <h1 className="jumbotron-heading">There are at least</h1>
                    <h1 className="jumbotron-heading2" hidden={!isLoaded}>{totalNumberOfAnimals}</h1>
                    <div class="loading" hidden={isLoaded}><h1>Loading&#8230;</h1></div>
                    <h1 className="jumbotron-heading">pets avaible for adoption in North America.</h1>
                    <h1 className="jumbotron-heading2" hidden={!isLoaded}>{calgaryNumberOfAnimals}</h1>
                    <h1 className="jumbotron-heading">of them are in Calgary.</h1>
                    <p className="lead text-muted">
                        According to Petfinder.
                    </p>
                    <h1 className="jumbotron-heading">Check out some shelters in the City</h1>
                </Container>
            </Jumbotron>
            <Album album={album} />
        </main>
    );
};

export default Main;

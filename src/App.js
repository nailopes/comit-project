import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';
import './App.css';



export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: albumItems,
            totalNumberOfAnimals: 0,
            calgaryNumberOfAnimals: 0,
            isLoaded: false
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentDidMount() {
    fetch('https://api.petfinder.com/v2/oauth2/token', { 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "grant_type": "client_credentials", "client_id": "U1CKZeFgMZr3lM2nPydnTAQXXISqNab1QRTEwwxQviDqsMi7tb", "client_secret": "i70Hc6IzXEj86GaCnNv8WN5HoplvVsVuA6WYuMdd" }),
              })  
      .then(res => res.json())
      .then(
        (result) => {
            fetch('https://api.petfinder.com/v2/animals', { 
                method: 'GET', 
                headers: new Headers({
                  'Authorization': 'Bearer '+result.access_token, 
                  
                })
              })
              .then(res => res.json())
              .then(
                  (result) => {
                      this.setState({...this.state, totalNumberOfAnimals: result.pagination.total_count, isLoaded: true});

                  }
              )
              .catch(() => this.setState({...this.state, isLoaded: false}))

              fetch('https://api.petfinder.com/v2/animals?location=Calgary%2C+Alberta%2C+Canada&distance=100', { 
                method: 'GET', 
                headers: new Headers({
                  'Authorization': 'Bearer '+result.access_token, 
                  
                })
              })
              .then(res => res.json())
              .then(
                  (result) => {
                      this.setState({...this.state, calgaryNumberOfAnimals: result.pagination.total_count, isLoaded: true});

                  }
              )
              .catch(() => this.setState({...this.state, isLoaded: false}))
        
        }
      )
      .catch(() => this.setState({...this.state, isLoaded: false}));
    }

    render() {
        return (
            <div>
                <Header
                    collapsed={this.state.collapsed}
                    toggleNavbar={this.toggleNavbar}
                    socialLinks={this.state.socialLinks}
                />
                <Main
                album={this.state.album}
                totalNumberOfAnimals={this.state.totalNumberOfAnimals}
                calgaryNumberOfAnimals={this.state.calgaryNumberOfAnimals}
                isLoaded={this.state.isLoaded} />
                <Footer />
            </div>
        );
    }
}

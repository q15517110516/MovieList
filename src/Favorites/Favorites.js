import React, { Component } from 'react';
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Typography, Button } from "antd";
import '../Movie.css';
import { removeFavorites } from '../Actions/Actions';


const { Title } = Typography;

export class Favorites extends Component {
    
    removeFavorites = (id) => {
        this.props.removeFavorites(id)
    }

    render() {
        
        let addedMovies = this.props.favorite.length ? (
            this.props.favorite.map(movie => {
                return (
                    <div className="posters" key={movie.id}>
                        <div className="posters-container">
                            <img 
                                className="movie-img" 
                                src={movie.img} 
                                alt="posters" 
                                width={238} 
                                height={340}
                            />
                            <div className="card-img-overlay">
                                <Button 
                                    className="btn" 
                                    ghost
                                    shape="round"
                                    onClick={() => this.removeFavorites(movie.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                            
                        </div>
                        
                        <div className="movie-title">
                            <Title level={4} style={{color: "white"}}>{movie.name}</Title>
                        </div>
                    </div>
                )

            })

            

        ) : (
            <Title level={1} style={{color: 'white'}}>You Don't Have Favorite Movies</Title>
        )
        return (
            <div className="movies">
                {addedMovies}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorites: (id) => {dispatch(removeFavorites(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

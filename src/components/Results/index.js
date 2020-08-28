import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Result({posts}) {
    return(
        <div>
            {posts.map((post) => (
                <div className="container" key={post.id}>
                {post == null ? (
                    <div>
                        Nao foi possivel carregar a API...
                    </div>
                ) :(
                <Link to={`/detalhes/${post.id}`} className="link">
                    <div className="resultados">
                        <div className="poster">
                            <img src={post.poster_path ? (`https://image.tmdb.org/t/p/original${post.poster_path}`) :
                            ("https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg")
                            }  
                            alt="imagem"
                            />
                        </div>
                        <div className="infos-results">
                            <div className="infos">
                                <div className="name"> 
                                    <div className="nota">
                                        {post.vote_average.toFixed(1)} 
                                    </div>
                                    <div className="title">
                                        {post.original_title}     
                                    </div>
                                </div>
                                
                                <div className="date">
                                    {post.release_date}
                                    
                                </div>
    
                                <div className="sinopse">
                                    {post.overview}
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                </Link>)}
            </div>
            ))}
        </div>
        
        
    );
}
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Header from '../../components/Header';
import './filmeStyle.css';

export default function Filme() {
    const [generos, setGeneros] = useState([]); 
    const [detalhes, setDetalhes] = useState({});
    const {id} = useParams();
    const chaveApi = '207b133b42331a7c0059c768ec068c1b';
    useEffect(() => {
        const requestDetails = async () => {
            try {
                await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${chaveApi}`)
                .then(({data}) => {
                    setDetalhes({...data})
                    setGeneros(data.genres); 
                })

            } catch (error) {
                console.log(error);
            }
        }
        requestDetails();
    },[id]);
    return(
        <div>
            <div>
                <Header />
            </div>

            <section className="header-detail">
                <div className="item1-header">{detalhes.original_title}</div>
                <div className="item2-header">{detalhes.release_date}</div>
            </section>

            <section className="body-detail">
                <section className="item1-body">
                    <div className="sinopse-info">Sinopse</div>
                    <div className="overview">
                        {detalhes.overview}
                    </div>
                    <div className="sinopse-info">Informações</div>
                    <section className="information">
                        <div className="item">Situation
                            <div className="item2">{detalhes.status}</div>
                        </div>
                        <div className="item">Language
                            <div className="item2">{detalhes.original_language}
                            </div>
                        </div>
                        <div className="item">Duration
                            <div className="item2">{detalhes.runtime} min</div>
                        </div>
                        <div className="item">Budget
                            <div className="item2">$ {detalhes.budget}</div>
                        </div>
                        <div className="item">Revenue
                            <div className="item2">$ {detalhes.revenue}</div>
                        </div>
                        <div className="item">Profit
                            <div className="item2">Sem info na API</div>
                        </div>
                    </section>
                    <section className="genres">
                        <div>
                            {generos.map((item, index) => {
                                return <span key={index}  className="generos">
                                    {item.name}
                                </span>
                            })}
                        </div>
                        <div className="vote">{detalhes.vote_average}</div>
                    </section>
                </section>
                
                <div className="item2-body">
                <img src={detalhes.poster_path ? (`https://image.tmdb.org/t/p/original${detalhes.poster_path}`) :
                            ("https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg")
                            }  
                            alt="imagem"
                            className="imagem-filme"
                            />
                </div>
            </section>
        </div>

        
    );
}
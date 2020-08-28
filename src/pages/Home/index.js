import React, {useState} from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';
import Axios from 'axios';
import Results from '../../components/Results';
import Pagination from '../../components/Pagination';
 

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(12);
    const chaveApi = '207b133b42331a7c0059c768ec068c1b';

    const handleSubmit = async (value) => {
        try {
            await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${chaveApi}&query=${value}`)
            .then(({data}) => {
                setFilmes(data.results);
                console.log(data)
            })
        } catch (error) {
            console.log(error);
        }
    }

   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const currentPosts = filmes.slice(indexOfFirstPost, indexOfLastPost);

   const pagina = (pageNumber) => setCurrentPage(pageNumber)
    return(
        <div>
            <div>
                <Header />
            </div>
            
            <div className="landing-page">
                <div>
                    <SearchBox handleSubmit={handleSubmit}/>
                </div>
                <div className="results">
                    <Results posts={currentPosts} key={filmes.id}/>  
                </div>

                <div>
                   <Pagination postPerPage={postPerPage} totalPost={filmes.length} pagina={pagina}/>
                </div>
            </div>
                
        </div>
        
    );
}
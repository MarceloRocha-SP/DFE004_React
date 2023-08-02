import userEvent from "@testing-library/user-event";
import {useState,useEffect} from "react";



export function FilmesCategorias(){

    

    const [filmesPopulares, setFilmesPopulares] = useState([])

    useEffect(() => {

        const chaveApi = "aa9ad439366a11c8a364f9d4fc8e185a";
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}`
        
        fetch(url).
        then(response => response.json()).
        then(data => {console.log(data)}).
        catch(error => {
            console.error("erro na requisição");
        })
        
    }

    )
    
 

    return (
        <div>
            <h1>Página para carregamento dos filmes</h1>
            <div>

            </div>
        </div>
        
    )
}

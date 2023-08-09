import axios from "axios";


// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'fbf191b1b049cda0eae2fa7262732d11';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const allMovies = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
// const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;
const movieDetailsEndpoint = id=> `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;


// functions to get images of different widths, (show images using these to improve the loading times)
export const image500 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w500'+posterPath : null;
export const image342 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w342'+posterPath : null;
export const image185 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w185'+posterPath : null;


const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}

export const fetchTopRatedMovies = ()=>{
    return apiCall(allMovies);
}


export const fetchMovieDetails = (id)=>{
    return apiCall(movieDetailsEndpoint(id));
}

// export const searchMovies = (params)=>{
//     return apiCall(searchMoviesEndpoint, params);
// }

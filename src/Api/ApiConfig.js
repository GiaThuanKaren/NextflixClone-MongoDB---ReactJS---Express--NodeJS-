const ApiKey='api_key=bec721bcb126b9938b6c2f7b39448c63';
const Base_Url='https://api.themoviedb.org/3';
const ImageOption={
    w500:'https://image.tmdb.org/t/p/w500',
    original:'https://image.tmdb.org/t/p/original'
}
const FetchOption={
    fetchUpcoming:`/movie/upcoming?${ApiKey}`,
    fetchTrendingDay:`/trending/all/day?${ApiKey}`,
    fetchTrending:`/trending/all/week?${ApiKey}`,
    fetchNextFlixOriginal:`/discover/movie?${ApiKey}`,
    FetchtopRated:`/movie/top_rated?${ApiKey}`,
    FetchActionMovie:`/discover/movie?${ApiKey}&with_genres=28&page=1`,
    FetchComedyMovie:`/discover/movie?${ApiKey}&with_genres=35&page=1`,
    FetchHorroMovie:`/discover/movie?${ApiKey}&with_genres=27&page=1`,
    FetchRomanceMovie:`/discover/movie?${ApiKey}&with_genres=10749&page=1`,
    FetchDocumentaries:`/discover/movie?${ApiKey}&with_genres=99&page=1`,
    FetchScienceFiction:`/discover/movie?${ApiKey}&with_genres=878&page=1`,
    FetchHonor:`/discover/movie?${ApiKey}&with_genres=27&page=1`,
    FetchWar:`/discover/movie?${ApiKey}&with_genres=10752&page=1`,
    fetchTvPopular:`/tv/popular?${ApiKey}`,
    fetchTvToprated:`/tv/top_rated?${ApiKey}`,
    fetchTvOnAir:`/tv/on_the_air?${ApiKey}`,
    fetchTvLastest:`/tv/latest?${ApiKey}`,
    fetchThriller:`/discover/movie?${ApiKey}&with_genres=53&page=1`,
    fetchAnimation:`/discover/movie?${ApiKey}&with_genres=16&page=1`,
    fetchCrime:`/discover/movie?${ApiKey}&with_genres=80&page=1`,
    FuncFetchParam:{
        FetchCredit:function(id,type="movie"){
            return `/${type}/${id}/credits?${ApiKey}`
        },
        FetchDetail:function(id,type){
            return `/${type}/${id}?${ApiKey}`
        },
        FetchGetMovie:function(id,type){
            return `/${type}/${id}/videos?${ApiKey}`
        },
        FetchGetSimialarMovie:function(id,type){
            return `/${type}/${id}/similar?${ApiKey}`
        },

    }
}

export {FetchOption,Base_Url,ImageOption,ApiKey}
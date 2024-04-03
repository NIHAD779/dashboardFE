import React,{useState,useEffect} from 'react'
import axios from 'axios'

interface Movie {
  title: string;
  genres: string[]; // Array of strings for genres
  year: string | null; // Year can be a string or null
}
const MoviesList = () => {
    const [movies,setMovies] = useState<Movie[]>([])
    const [page,setpage] = React.useState<number>(1)
    const [title,setTitle] = useState<string>('')

    const fetchMovies =  async(page:number,title:string)=>{
        try{
            const response = await axios.get(
              "https://dashboardbe.onrender.com/movies",
              {
                params: { page, title },
              }
            );
            setMovies(response.data)
        }catch(error){
            console.log(error)
    }}
    useEffect(()=>{
        fetchMovies(page,title)
    },[page,title])
  return (
    <div className=" border border-blue-300 bg-gray-400 p-5 flex flex-col gap-5">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[25%] rounded-lg px-5"
      />
      <table>
        <thead className="">
          <tr className="flex  justify-between gap-10 text-center">
            <th className="w-[50%]">Title</th>
            <th>Genre</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr
                className={`flex  justify-between gap-10 ${
                  index % 2 === 0 ? "bg-gray-400" : "bg-gray-100"
                } hover:bg-gray-600 rounded-lg p-2`}
                key={index}
              >
                <td className="w-[50%]">{movie.title}</td>
                <td>
                  {movie.genres.map((genre) => (
                    <span className="bg-gray-300 rounded-lg px-2 mx-1">
                      {genre}
                    </span>
                  ))}
                </td>
                <td>{movie.year || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="flex justify-between py-5">
          <button
            onClick={() => setpage(page - 1)}
            disabled={page === 1}
            className="bg-white rounded-xl p-5 hover:bg-gray-600 hover:text-white"
          >
            Prevous
          </button>
          <button
            onClick={() => setpage(page + 1)}
            className="bg-white rounded-xl p-5 hover:bg-gray-600 hover:text-white"
          >
            Next
          </button>
        </tfoot>
      </table>
    </div>
  );
}

export default MoviesList
import React,{useState,useEffect} from 'react'
// import axios from 'axios'

const MoviesList = () => {
    // const [movies,setMovies] = useState([])
    const [page,setpage] = useState(1)
    const [title,setTitle] = useState('')

    // const fetchMovies =  async()=>{
    //     try{
    //         const response = await axios.get('http://localhost:3000/movies',{
    //             params:{page}
    //         })
    //         console.log(response)
    //     }catch(error){
    //         console.log(error)
    // }}

    useEffect(()=>{
        // fetchMovies()
    },[page,title])
  return (
    <div>
        <input
        type='text'
        placeholder='Search by title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      <table>
        <thead className="">
          <tr className="flex gap-10">
            <th>Title</th>
            <th>Genre</th>
            <th>year</th>
          </tr>
        </thead>
        <tfoot>
            <button onClick={() => setpage(page-1)} disabled={page === 1}>
                Prevous
            </button>
            <button onClick={()=> setpage(page+1)}>
                Next
            </button>
        </tfoot>
      </table>
    </div>
  );
}

export default MoviesList
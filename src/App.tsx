import './App.css'
import MoviesList from './MoviesList';
function App() {

  return (
    <>
      <div className='flex flex-col gap-5'>
        <h1 className="text-3xl font-bold ">Movies DashBoard</h1>
        <MoviesList />
      </div>
    </>
  );
}

export default App

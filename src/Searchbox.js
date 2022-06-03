const Searchbox = () => {
    return ( 
        <div className="container">
            <input type="text" value={""} placeholder="Search for movies"onChange={(e)=>e.target.value}/>
        </div>
    );
}
 
export default Searchbox;
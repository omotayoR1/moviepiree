import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Top250tv = () => {
    const [items,setItems]=useState();
    const [isPending, setIsPending]=useState(true);
    const [err, setErr]=useState(null);

    useEffect(()=>{
            fetch('https://imdb-api.com/en/API/Top250TVs/k_7p1f0192')
            .then(res=>{
                if(res.status!== 200){
                    throw Error ('could not fetch resource')
                }
                return res.json();
            })
            .then(items=>{
                setItems(items);
                setIsPending(false);
                setErr(null);
                console.log('found');
            })
            .catch(err=>{
                setErr(err.message);
                setIsPending(false);
            }
                )
        },[]);
    
    return (
        <div className="top">
            {isPending && <div className=''>Loading...</div>}
            {err && <div className=''>{err}</div>}
            <Link>
                {items.map(item=>
                    <div className="moviecard" key={item.id}>
                        <div className="pictureframe">
                          <div className="img">
                             <img src={item.image} alt={item.title}/>
                          </div>
                          <div className="rank">
                             <p>{item.rank}</p>
                          </div>
                          <div className="year">
                             <p>{item.year}</p>
                          </div>
                        </div>
                        <div className="titlebar">
                            <div>
                                <h3>{item.fullTitle}</h3>
                            </div>
                        </div>
                    </div>
                    )}
            </Link>
        </div>
    );
}
 
export default Top250tv;
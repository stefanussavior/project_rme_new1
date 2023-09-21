import { useEffect, useState } from 'react';
import '../helper/Loader.css';
import { ClimbingBoxLoader } from 'react-spinners';

export default function Loader() {
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },6000)
    },[])

    return(        
            <div className="div-loading">
                {
                    Loading ? 
                    (
                        <ClimbingBoxLoader
                        size={50}
                        color={"#F37A24"}
                        loading={Loading}
                        />
                        )
                    
                    : (
                        <div>
                            <h1 style={{backgroundColor:"white"}}>Coba</h1>
                        </div>
                    )    
                }
        </div>
        
    )
}
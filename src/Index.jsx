import { useEffect } from "react"
import "./Index.css"
import NavigationBar from "./assets/NavigationBar/NavigationBar";


export default function Index() {

    // const [loading, setLoading] = useState(false);
    // const override = css`
    //     background-color: #00000;
    //     font-size: 200px;
    // `;

    useEffect(() => {
        document.title = "Index"
        // setLoading(true)
        // setTimeout(() => {
        //     setLoading(false)
        // },6000)
    },[])


    return(
        <>
        <NavigationBar/>
           
        </>
        // <>
       
        // <div className="div-loading">
        //     {
        //         loading ?
        //         (
        //             <>
                    
        //             <div>
        //             <PropagateLoader
        //                 size={80}
        //                 color={"#F37A24"}
        //                 loading={loading}
        //                 css = {override}
        //                 aria-label="Loading..."
        //             />
        //             </div>
        //             {/* <div>
        //                 <h2 style={{
        //                     marginTop: "20rem",
        //                     textAlign: "center"
        //                 }}>Loading...</h2>
        //             </div> */}
        //             <br/>
        //             <br/>

        //             </>
        //         )
        //         : 
        //         (
        //             <div className="background">
        //                 <h2>Coba</h2>
        //             </div>
        //         )
        //     }
        // </div>
        // </>
    )
}
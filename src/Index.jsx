import { useEffect } from "react";
import "./Index.css";
import NavigationBar from "./assets/NavigationBar/NavigationBar";

export default function Index() {
  // const [loading, setLoading] = useState(false);
  // const override = css`
  //     background-color: #00000;
  //     font-size: 200px;
  // `;

  useEffect(() => {
    document.title = "Index";
    // setLoading(true)
    // setTimeout(() => {
    //     setLoading(false)
    // },6000)
  }, []);

  return (
    <>
      <NavigationBar />
      {/* <div
        style={{
          paddingTop: "40px",
        }}
      >
        <h2>Responsive Topnav Example</h2>
        <p>Resize the browser window to see how it works.</p>
      </div> */}
      <div className="section">
        <div id="section1">
          <h1 style={{ position: "relative", top: "100px" }}>
            Coba membuat section
          </h1>
        </div>
        <div id="section2">
          <h1 style={{ position: "relative", top: "100px" }}>
            Coba membuat section
          </h1>
        </div>
        <div id="section3">
          <h1 style={{ position: "relative", top: "100px" }}>
            Coba membuat section
          </h1>
        </div>
        <div className="footer">
          <h1 style={{ textAlign: "center" }}>Footer</h1>
        </div>
      </div>
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
  );
}

import { useState } from "react";
import { Table } from 'react-bootstrap';
import CourrierData from "./data/ModeleCourrier";

const Readmore = () =>{

    const [collapse, setCollapse] = useState(false);

    return (
        <>
        <div className="content-readmore">
        <button onClick={()=>setCollapse((prev) => !prev)}>Modèles de courrier PDF</button>
           
                <Table className={`long-text ${collapse ? "expanded" : ""}`}  hover style={{ backgroundColor:"#fff" }}>
                    <thead style={{ verticalAlign:'middle' }}>
                        <tr style={{ fontSize:"20px", fontWeight:"700" }}>
                        <th style={{color:'#2b6338', width:"10%", borderTop:"none" }}>#</th>
                        <th style={{color:'#2b6338', width:"80%", borderTop:"none" }}>Courrier</th>
                        <th style={{color:'#2b6338', width:"10%", borderTop:"none" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ verticalAlign:'middle' }}>
                    {
                        CourrierData.slice(0, 5).map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td style={{color:'#2b6338' }}>{item.courrier}</td>
                                <td><a target="_blank" href={item.link}><i className="fa fa-download" style={{ color:"#f9b233" }}></i></a></td>
                            </tr>
                        ))
                    }    
                    </tbody>
                </Table>
        </div>
        </>
    )
        
}

export default Readmore;
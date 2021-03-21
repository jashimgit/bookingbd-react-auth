import React, { useState } from 'react';
import { useParams } from 'react-router';
import catItems from '../fakeData/categoryitem';
import Map from './../Map/Map';

const CategoryDetails = () => {
    const [categoryItem, setCategoryItem] = useState(catItems);
    const [display, setDisplay] = useState(true);
    const [toggle, setToggle] = useState(false);
    let {id} = useParams();
    


    const handleSearch = (e) => {
        e.preventDefault();
        setCategoryItem(catItems);
        setDisplay(false);
        setToggle(true);
    }

    const findData = categoryItem.filter(text => text.item.toLowerCase() == id.toString().toLowerCase());
    // console.log(findData);
    return (
        <div className="container mt-5">
            <div className="row text-white">
                <div className="col-md-4">
                    <div className="card bg-warning">
                        <div className="card-body">
                           {display && (
                                <form>
                                <div className="form-group">
                                    <label htmlFor="">From</label>
                                    <input  className="form-control" type="text" name="" id="" placeholder="Komlapur"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">From</label>
                                    <input className="form-control"  type="text" name="" id="" placeholder="Narsingdi"/>
                                </div>
                                <button className="btn btn-primary btn-sm" onClick={handleSearch}>Search</button>
                            </form>
                           )}
                        
                            
                                
                               {
                                   toggle && (
                                    <div>
                                    <span>From</span> <h4>Komlapur</h4>
                                    <span>To</span> <h4>Narshingdi </h4>
                                   
                                    <table className="table table-striped">
                                        <tr>
                                            <th>Image</th>
                                            <th>Seat No</th>
                                            <th>Price</th>
                                        </tr>
                                      
                                   { findData.map(data => (
                                        <tr>
                                           <td className="pr-0">
                                               <img  style={{width: "30%"}} src={data.image} alt="img"/>
                                              
                                           </td>
                                           <td>{data.seat}</td>
                                           <td>BDT. {data.Price}</td>
                                       </tr>
                                    ))  }  
                                    </table>

                               </div>
                                   )
                               }
                            
                        

                          
                            <hr/>
                            <br/>

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                               <h3>Map section</h3>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;
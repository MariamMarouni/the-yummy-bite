import React from "react"; //to bring the React library into my file so we can use its tools to build the user interface.

export const CakeCard = ({ cake }) => { //My first component is a functional component called CakeCard. It takes a single prop, cake, which is an object containing information about a specific cake (like its name, image, and options).

    return (
        <div className="col-6 col-md-4 col-lg-3"> 

            <div className="card">
               
                <img
                    src={cake.image}
                    className="card-img-top"
                    alt={cake.name}
                />  

               <div className="card-body"> 
                    <h5>{cake.name}</h5>

                    <select>
                        {
                            cake.options.map((option) => { //There is an array named options contains sizes of each cake and its price.
                                return (
                                    <option>
                                        {option}
                                    </option>
                                );// it is similar to <option value="small">Small - $10</option> and the other sizes with prices but here we are using the map function to create an option element for each item in the options array of the cake object.
                            })
                        }
                    </select>

                </div> 

            </div> 

        </div> // closing the column div,second div contains the name of the cake and a dropdown menu that lists the different options for that cake with their respective prices.

    );
};
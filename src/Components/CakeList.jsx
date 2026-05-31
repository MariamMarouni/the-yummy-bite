import React from "react";
import { CakeCard } from "./CakeCard";// since we use down the function CakeCard.

export const CakeList = ({ cakes }) => { //This is my second component, CakeList, which is also a functional component. It takes a single prop "cakes".

    return (

        <div className="container">

            <div className="row">

                {
                    cakes.map((cake) => { //we take the cakes prop which is an array of cake objects and we use the map function to iterate over it. For each cake in the array, we return a CakeCard component.
                        return (
                            <CakeCard cake={cake} />   //the first world cake is just a name for the prop that we are passing to the CakeCard component, and the second cake is the actual cake object from the cakes array that we are passing as a prop to the CakeCard component.   
                        );
                    })
                }

            </div> 

        </div>

    );
};
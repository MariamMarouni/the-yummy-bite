import React from "react";
import { CakeCard } from "./CakeCard";

export const CakeList = ({ cakes }) => {

    return (

        <div className="container">

            <div className="row">

                {
                    cakes.map((cake) => {
                        return (
                            <CakeCard
                                cake={cake}
                            />
                        );
                    })
                }

            </div>

        </div>

    );
};
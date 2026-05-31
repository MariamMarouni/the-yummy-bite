import React from "react";

export const CakeCard = ({ cake }) => {

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
                            cake.options.map((option) => {
                                return (
                                    <option>
                                        {option}
                                    </option>
                                );
                            })
                        }
                    </select>

                </div>

            </div>

        </div>
    );
};
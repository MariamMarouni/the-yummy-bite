import React, { useState } from "react";
import { Cake } from "../Classes/Cake";
import { CakeList } from "../Components/CakeList";

export const Menu = ({}) => {

    const [cakes] = useState([

        new Cake(
            "Strawberry Cake",
            "/cake1.jpeg",
            [
                "Small : $15",
                "Medium : $18",
                "Large : $20"
            ]
        ),

        new Cake(
            "Pineapple Cake",
            "/cake2.jpeg",
            [
                "Small : $18",
                "Medium : $22",
                "Large : $25"
            ]
        ),

        new Cake(
            "Chocolate Cake",
            "/cake3.jpeg",
            [
                "Small : $12",
                "Medium : $15",
                "Large : $18"
            ]
        ),

        new Cake(
            "Banana Cake",
            "/cake4.jpeg",
            [
                "Small : $10",
                "Medium : $14",
                "Large : $18"
            ]
        ),

        new Cake(
            "Vanilla Cake",
            "/cake5.jpeg",
            [
                "Small : $10",
                "Medium : $12",
                "Large : $15"
            ]
        ),

        new Cake(
            "ICE-CREAM Cake",
            "/cake6.jpeg",
            [
                "Small : $15",
                "Medium : $20",
                "Large : $25"
            ]
        ),

        new Cake(
            "Mini Cake",
            "/mini-Cake.jpeg",
            [
                "3 pieces : $6",
                "6 pieces : $11",
                "9 pieces : $16"
            ]
        ),

        new Cake(
            "Cupcake",
            "/cupcake.jpeg",
            [
                "3 pieces : $9",
                "6 pieces : $16",
                "9 pieces : $24"
            ]
        ),

        new Cake(
            "MUG Cake",
            "/mug-cake.jpeg",
            [
                "Small (2 persons) : $15",
                "Medium (4 persons) : $25"
            ]
        )

    ]);

    return (

        <section className="menu">

            <h2>Our Cake Prices</h2>

            <CakeList
                cakes={cakes}
            />

        </section>

    );
};
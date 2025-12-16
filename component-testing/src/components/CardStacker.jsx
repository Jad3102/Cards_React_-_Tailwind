import React from "react";
import Card from "./Card";

const CardStacker = ({Data}) => {
    return (
        <div className="flex card-stacker py-10">
            {Data.map((eachData, index) => (
                <Card
                    key={index}
                    title={eachData.title}
                    subtitle={eachData.subtitle}
                    rating={eachData.rating}
                    backgroundColors={eachData.backgroundColors}
                    className={index !== 0 ? `-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]` : ``}
                    image={eachData.image}
                />
            )
        )}
        </div>
    );
};

export default CardStacker;
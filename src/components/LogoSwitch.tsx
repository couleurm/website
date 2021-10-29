import React from "react";
import {logoToggle, images} from "../utils/content"

export default function Logo() {
    const {toggled, toggle} = logoToggle()

    return (
        <div>
            <img
                src={toggled ? images.context : images.ctt}
                height={90}
                width={90}
                loading="eager"
                onClick={toggle}
                className="rounded-full transform hover: transition duration-500 hover:scale-125"
                alt={`cutie pie couleur`}
            />
        </div>
    )

}
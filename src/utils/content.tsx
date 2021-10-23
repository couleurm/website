import React, {useState} from "react"

export const images = {
    ctt: "https://cdn.discordapp.com/attachments/866735107024093194/900503967732224030/82734468.png",
    context: "https://media.discordapp.net/stickers/893730725067636786.png"
}

export function logoToggle() {
    const [toggled, setToggled] = useState(false)

    function toggle() {
        setToggled(prevToggled => !prevToggled)
    }

    return {toggled, toggle}
}
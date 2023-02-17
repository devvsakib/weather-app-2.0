import React from 'react'

const ConditionImage = ({ text }) => {
    const imageName = () => {
        switch (text) {
            case "mist":
                return "mist.png"
            case "overcast":
                return "overcast.png"
            case "partly cloudy":
                return "ptw.png"
            case "clear":
                return "clear.png"
            default:
                return "sun.png"
        }
    }

    return (
        <div>
            <img className='rounded-lg w-52' src={`/assets/${imageName()}`} alt="" />
        </div>
    )
}

export default ConditionImage
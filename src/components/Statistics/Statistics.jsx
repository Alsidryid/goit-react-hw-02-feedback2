import "./Statistics.module.css"

export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
 
    return ( <>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>Positive feedbacks:{positivePercentage}%</p>
            </>
)}
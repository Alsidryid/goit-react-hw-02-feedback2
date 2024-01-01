
export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
 
    return ( <>
                <p>{good}</p>
                <p>{neutral}</p>
                <p>{bad}</p>
                <p>{total}</p>
                <p>Positive{positivePercentage}%</p>
            </>
)}
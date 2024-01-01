export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map(name => {
                return (  <button onClick={(() => onLeaveFeedback(name))} key={name}>{name}</button>)})}
        </>
    )}
export default function Die(props) {
    const holdingDie = props.isHeld ? "held" : "";

    return (
        <button className={`die ${holdingDie}`}>{props.value}</button>
    )
}
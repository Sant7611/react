export default function Event(){
// Handling Click event
    function handleClick(){
        console.log("Button is clicked");
    }

    return <div>
        <button onClick = {handleClick}  >Click here to get the Message</button>
    </div>
}
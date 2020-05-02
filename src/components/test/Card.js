import React, {useState, useEffect} from 'react'



//sample setup of React Hook good to look at later
function Card (props) {
    const [flipped, setFlipped] = useState(false);
    const [status, setStatus] = useState('offline')

    const online = () => setStatus('online')
    const offline = () => setStatus('offline')

    const bool = () => setFlipped(flipped => !flipped)

    useEffect(() => {
         document.getElementById(`${props.coachname}`).innerText = `You are ${status}` 
         document.getElementById(`${props.flipper}${props.coachname}`).innerText = `This is ${flipped}`
    })
    
    let name = `${props.flipper}${props.coachname}`
    
    return (
        <div className="Card">
            <div className='NameWrapper'>
                <div>{props.coachname}</div>
                <button onClick={bool}>Touch me</button>
                <div id={name}></div>
            </div>
            <hr></hr>
            <div className='StatusWrapper'>
                <button onClick={online}>Set Online</button>
                <button onClick={offline}>Set Offline</button>
                <div id={props.coachname}></div>
            </div>
    
        </div>
    )
}

export default Card
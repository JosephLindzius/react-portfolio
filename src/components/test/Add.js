import React, {useEffect, useState} from 'react';



// another sample hook
function Add (){
    
    let cat = "apple"

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

   
    
        return (
          <div className="Apple">
            <p>{cat}</p>
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
          </div>
          
        );
      
}

export default Add
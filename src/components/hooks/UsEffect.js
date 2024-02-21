import React, { useEffect, useState } from 'react'

function UsEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats ${count}`
        } else {
            document.title = 'Chats '
        }
    }, [count]);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click Me</button>

        </div>
    )
}

export default UsEffect
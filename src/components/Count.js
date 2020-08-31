import React, { useEffect, useState } from 'react'

const Count = () => {
    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCnt(cnt => cnt + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {cnt}
        </div>
    )
}

export default Count;
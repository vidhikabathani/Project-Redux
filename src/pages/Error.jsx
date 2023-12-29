import React from 'react'

function Error() {
    return (
        <div className='p-100'>
            <div className="container center">
                <h1 className='allura f-5'>EBuy</h1>
                <div className='err'>
                    <div>
                        <h1>So Sorry!</h1>
                        <h3>PAGE NOT FOUND</h3>
                        <h5>~ We Looked everywhere for this page.</h5>
                        <h5>~ Are you sure the Website URL is correct?</h5>
                        <button className='btn'>Go Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
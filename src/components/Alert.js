import React from 'react'

function Alert() {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        this  is an alert
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
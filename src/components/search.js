import React from 'react'

function search (props) {
    return (
        <div>
            <input data-test="search_button" type= "submit" name = "submit" value="Search" onClick={props.handleSubmit}/>
        </div>
    )
}

export default search

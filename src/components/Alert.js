import React from 'react'


function Alert(props) {
    const capitalzed = (word)=>{
        const lower = word.toLoweCase();
        return lower.charAt(0).toUpperCase() +lower.slice(1)
    }
  return (

    props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert" id='ok'>
    <strong>{capitalzed(props.Alert.type)}</strong>:{props.Alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">n</button>
     </div>
  )

}

export default Alert

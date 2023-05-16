const Textarea = ({id, name, labelText, defaultValue}) => {
    return <>
        <div className="mb-3">
            <label 
                htmlFor={id} 
                className="form-label mb-0">{labelText}
            </label>
            <textarea 
                name={name}
                className="form-control"
                id={id} 
                rows="3"
                defaultValue={defaultValue} >
            </textarea>
        </div>
    </>
}

export default Textarea;
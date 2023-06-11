const Child=(props)=>{
    const {setInputValue}=props;
    return(
        <div className="child">
            <h2>Child Component</h2>
            <input onChange={(e)=>(setInputValue(e.target.value))}></input>
        </div>
    )
}
export default Child;
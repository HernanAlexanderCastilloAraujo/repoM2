function TextInputWithFocusButton(){
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };


return (
    <>
 <input ref={inputEl} type="text"/>
 <button onClick={onButtonClick}>Focus the input</button>   
    </>
)
}
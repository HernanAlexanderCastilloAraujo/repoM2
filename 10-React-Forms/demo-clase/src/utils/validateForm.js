const validateForm = (form, setErrors, errors) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){
   console.log("Email correcto");
    setErrors({
        ...errors,
        email: "",
    })
    } else {
        console.log("Email incorrecto");
        setErrors({
            ...errors,
            email: "Invalid email",
        })
    }
  
    
  }

  export default validateForm;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import { addProduct } from '../../redux/actions/actions';

class Form extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         name: "",
         price: "",
         id: ""
      }
   }

   handleInputChange = (event) => {
     
      this.setState({ ...this.state, [event.target.name]: event.target.value });
   }

   handleSubmit = (event) => {
     event.preventDefault();
   
       let verification = false;
     this.props.list.forEach(product => {
  //    product.name ===this.state.name? verification = true : verification = false;
         if(product.name === this.state.name){
             
            verification = true;
         }
     })

//verification? alert("Este producto ya existe") : this.state.name&&this.state.price?  this.props.addProduct({...this.state, id: Date.now() }): alert("Por favor, completa los campos")


     if(verification){
         alert('Este producto ya existe')
     }
      else if(this.state.name&&this.state.price){
         this.props.addProduct({...this.state, id: Date.now() })
         this.setState({name: '', price: ''})
     }else{
         alert('Por favor, completa los campos')
     }
     
   
      
         
         // this.props.addProduct({...this.state, id: Date.now() })
         // this.setState({name: '', price: ''})
    
   }

   render(){
      return (
         <form className='formBg'>
            <div className='inputBox'>
               <label>Nombre: </label>
               <input
                  name='name'
                  onChange={this.handleInputChange}
                  value={this.state.name}
               />
            </div>
            <div className='inputBox'>
               <label>Precio:</label>
               <input
                  type='number'
                  name='price'
                  onChange={this.handleInputChange}
                  value={this.state.price}
               />
            </div>
            <button onClick={this.handleSubmit} className='formBtn'>¡ADD!</button>
            <img src={Caja} alt='' className='logo' />
         </form>
      )
   }
}
export function mapStateToProps(state) {
   return {
      list: state.list,
   };
}

export function mapDispatchToProps(dispatch) {
   return {
      addProduct: (product) => dispatch(addProduct(product)),
   };
}



export default connect(mapStateToProps, mapDispatchToProps)(Form);

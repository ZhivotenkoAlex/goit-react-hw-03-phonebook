import React, { Component } from 'react';
import shortid from 'shortid';
import s from './NameForm.module.css';

class NameForm extends Component{
    state = {
        name: '',
        phone: '',
        id:''
    };

    nameInputId = shortid.generate();
    phoneInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
        
    };

    handleSubmit = event => {
        event.preventDefault();
       
       this.props.onSubmit(this.state);

        this.setState({ name: '', phone:''})

    }

    
    render() {
        const { name, phone } = this.state;
        return (
            <>
                <form className={s.form } onSubmit={this.handleSubmit}>
                <div className={s.container}>
                     <label className={s.label}>
                            Name
                            <input
                                type="text"
                                name='name'
                                value={name}
                                onChange={this.handleChange}
                                id={this.nameInputId}
                            />
                        </label >
                        <label className={s.label}>
                            Phone
                             <input
                                type="text"
                                name='phone'
                                value={phone}
                                onChange={this.handleChange}
                                id={this.phoneInputId}
                            />
                        </label>
                        

                     <button className={s.button} type='submit'>Add contact</button>

                    </div>
                    </form>
            </>
        )
    }

}

export default NameForm;
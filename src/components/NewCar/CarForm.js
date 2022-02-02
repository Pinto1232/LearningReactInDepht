import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import { FormGroup } from "@mui/material";
import React, {useState}  from "react";
import './CarForm.css'

const CarForm = (props) => {

    //Multi State approach
    const [enteredName, setEnteredName] = useState('')
    const [enteredMaker, setEnteredMaker] = useState('')

      //Having State as object
    /* const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredMaker: ''
    })*/

    const carnameChangeHandler = event => {
         setEnteredName(event.target.value)

         
         /*setUserInput({
             ...userInput,
             enteredName: event.target.value,
         });

         //I should use this function if my state update depends on prevState
         setUserInput((prevState) => {
            return { ...prevState, enteredName: event.target.value};
         });*/
    };

    const carmakerChangeHandler = event => {
        setEnteredMaker(event.target.value)

        /*setUserInput({
            ...userInput,
            enteredMaker: event.target.value,
        });

        //I should use this function if my state update depends on prevState
        setUserInput((prevState) => {
            return { ...prevState, enteredName: event.target.value};
         });*/
    };

    const submitHandler = (event) => {
        event.preventDefault();
            
            const carData = {
                name: enteredName,
                maker: enteredMaker
            };
            //console.log(carData);
            props.onSaveCarData(carData);

            setEnteredName('');
            setEnteredMaker('');
    };


    return (
            <form onSubmit={submitHandler}>
               <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Car Name</label>
                        <input 
                        type="text" 
                        value={enteredName}
                        onChange={carnameChangeHandler}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Car Maker</label>
                        <input 
                        type="text" 
                        value={enteredMaker}
                        onChange={carmakerChangeHandler} 
                        />
                    </div>
                        
                    <div className="new-expense__actions">
                        <button type="submit">Add Car</button>
                    </div>
                </div>
        </form>

   

        // <Card >
        //     <FormGroup onSubmit={submitHandler}>
        //         <Typography>
        //             <Grid container spacing={1}>
        //                <Grid xs={12} sm={6} item>
        //                   <TextField
        //                     label="Car Name"
        //                     placeholder="Enter car name"
        //                     variant="outlined"
        //                     fullWidth required
        //                     type="text"
        //                     value={enteredName}
        //                     onChange={carnameChangeHandler}
        //                   />
        //                </Grid>

        //                <Grid xs={12} sm={6} item>
        //                   <TextField
        //                     label="Car Maker"
        //                     placeholder="Enter car maker"
        //                     variant="outlined"
        //                     fullWidth required
        //                     type="text" 
        //                     value={enteredMaker}
        //                     onChange={carmakerChangeHandler} 
        //                   />
        //                </Grid>

        //                <Grid xs={12} item>
        //                    <Button type="submit" variant="contained" color="primary">Primary</Button>
        //                </Grid>
        //             </Grid>
        //         </Typography>
        //     </FormGroup>
        // </Card>
    )
}

export default CarForm;
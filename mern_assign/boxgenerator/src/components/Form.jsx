import React, {useState} from 'react';
import styles from './FormComponent.module.css'


const Form = () => {

    //  state variable to store the form information
    const [formInfo, setFormInfo] = useState({
        color:"",
    });

    //  state variable to store all the SUBMITTED form info
    //  every time info is submitted it'll be pushed in to arr
    const [allBoxes, setAllBoxes] = useState([])

    //  each event listener should have a "handler"
    //  changeHandler
    const changeHandler = (e)=>{
        // console.log("You be typing in the form!!!")
        // console.log(e.target.name)
        // console.log(e.target.value)

        //  setting form info
        setFormInfo({
            //  add a ...spread to make a copy and preserve other key:values
            //  preserving key:value pairs with ...spread
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    //  submitHandler
    const submitHandler = (event)=>{
        event.preventDefault()
        console.log("Thanks for submitting your color suggestion!")
        //  now I want the arr containing all form submissions (aka allBoxes) to add this new form info
        setAllBoxes([...allBoxes, formInfo])

        //  modify object means to setObject
        setFormInfo({
            color:""
        })
    }

    const deleteBox = (e, idxnumber)=>{
        console.log("deleting this box at index: ", idxnumber);
        //  splice method
        // let boxes = [...allBoxes];
        // boxes.splice(idxnumber, 1);
        // setAllBoxes(boxes);

        //  filter method
        let result = allBoxes.filter((box, idx)=>{
            return idx !== idxnumber;
        })
        setAllBoxes(result)
    }


    return (
        <div className="container">
            <div>
                <form onSubmit={submitHandler} className="col-4 offset-md-4 mt-4 form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputColor" className="mx-sm-2 text-capitalize text-info font-weight-bold">Color</label>
                        <input onChange={changeHandler} type="text" className="form-control" id="inputColor" name="color" value={formInfo.color}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 offset-md-4">Submit Color</button>
                </form>
                <div >
                    {
                    allBoxes.map((box, idx)=>{
                        return (
                            <>
                            <div key={idx} className={styles.boxcontainer} style = {{backgroundColor: box.color}}>
                            <h1 className={styles.fonty}>{box.color}
                            <button className="btn btn-danger" onClick={e=> deleteBox(e, idx)}>DESTROY</button></h1>
                            </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};


export default Form;
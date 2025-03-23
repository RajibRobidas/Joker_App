import { useState } from "react"
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty!';
    } 
    if (!values.remarks) {
        errors.remarks = 'Remarks cannot be empty!';
    } 
    if (!values.rating) {
        errors.rating = 'Rating cannot be empty!';
    } 

    return errors;
};


export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
      });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value};
    //     })
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     });
    // }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>&nbsp;
                <input type="text" id="username" placeholder="username" value={formik.values.username} onChange={formik.handleChange} name="username" />
                <br /><br />
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}

                <label htmlFor="remarks">Remarks</label>&nbsp;
                <textarea name="remarks" placeholder="Add few remarks" id="remarks" value={formik.values.remarks} onChange={formik.handleChange} ></textarea>
                <br /><br />
                {formik.errors.remarks ? <p style={{color: "red"}}>{formik.errors.remarks}</p> : null}

                <label htmlFor="rating">Rating</label>&nbsp;
                <input type="number" id="rating" placeholder="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} name="rating" />
                <br /><br />
                {formik.errors.rating ? <p style={{color: "red"}}>{formik.errors.rating}</p> : null}

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}
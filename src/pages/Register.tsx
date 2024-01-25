import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from '../styles/page.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterUserMutation } from "../services/user";
  
  interface IFormInput {
    name: string
    email: string
    password: string
  }
  
  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field").matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    ),
    password: yup.string().required("Email is a required field").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
      "Invalid email format"
    ),
  });
  
  export default function Register() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormInput>({ resolver: yupResolver(schema) });
    const [registerUser, responseInfo] = useRegisterUserMutation();
  
    const navigate = useNavigate();

    const onSubmitHandler: SubmitHandler<IFormInput> = async(formData)=>{
      const{name, email, password} = formData;
      const result = await registerUser({name:name, email:email, password:password});
      navigate("/");
      console.log(result);

    };
    return (
      
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
             <h2>Registration Form</h2>

        <label className={styles.lable}>First Name</label>
        <input className={styles.input} {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
  
        <label className={styles.lable}>Email</label>
        <input className={styles.input} {...register("email")}/>
        {errors.email && <p>{errors.email.message}</p>}
  
        <label className={styles.lable}>Password</label>
        <input className={styles.input} {...register("password")} type="password" />
        {errors.password && <p>{errors.password.message}</p>}
  
        <input className={styles.input2} type="submit" value="Register" />
      </form>
    )
  }
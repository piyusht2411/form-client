import { useForm, SubmitHandler } from "react-hook-form"
import styles from '../styles/page.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/user";
import * as yup from "yup";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import {setUser} from '../store/reducer/authSlice'

interface IFormInput {
  email: string
  password: string
}
const schema = yup.object().shape({
  email: yup.string().required("Email is a required field").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email format"
  ),
  password: yup.string().required("Email is a required field").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
    "Invalid email format"
  ),
});



export default function Login() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [loginUser, {data, isSuccess, isLoading, isError, }] = useLoginUserMutation();

  const onSubmitHandler: SubmitHandler<IFormInput> = async(formData)=>{
    const{email, password} = formData;
    const result = await loginUser({email:email, password:password});
    // navigate('/dashboard');
    console.log(result);
  }
  useEffect(()=>{
    if(isSuccess){
      dispatch(setUser({name:data.user.name, token:data.token}));
      navigate('/dashboard')
    }

  })

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <label className={styles.lable}>Email</label>
      <input className={styles.input} {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.lable}>Last Name</label>
      <input className={styles.input} {...register("password")} type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <input className={styles.input2} type="submit" value="Login" />
    </form>
  )
}
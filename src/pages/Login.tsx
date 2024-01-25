import { useForm, SubmitHandler } from "react-hook-form"
import styles from '../styles/page.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
  const navigate = useNavigate();

  const onSubmit = async (formData: IFormInput) => {
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.lable}>Email</label>
      <input className={styles.input} {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.lable}>Last Name</label>
      <input className={styles.input} {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <input className={styles.input2} type="submit" value="Login" />
    </form>
  )
}
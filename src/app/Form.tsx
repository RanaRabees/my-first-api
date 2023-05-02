"use client"
import { useForm } from 'react-hook-form';
import { json } from 'stream/consumers';

const Form = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log("Errors:", errors)

    const formHandler = async (data: any) => {
        console.log(data)
        await fetch("/api/formHandler", {
            method: "POST",
            body: JSON.stringify(data)
        });

    };

    console.dir(register)
    // console.log(register)


    return (
        <div className="mx-40 my-60">
            <form onSubmit={handleSubmit(formHandler)} className="flex space-x-6">
                <div>
                    <label htmlFor="">Email:</label><br />
                    <input
                        {...register("email", {
                            required: true
                        })}
                        type="email"
                        className="shadow-xl shadow-black hover:shadow-pink-400 rounded-xl transition-all hover:rounded-full border-2 hover:border-4 border-red-400" placeholder="Enter your email" /><br />
                </div>
                <div>
                    <label htmlFor="">Password:</label><br />
                    <input
                        {...register("password", {
                            required: true,
                            minLength: 8
                        })}
                        type="password"
                        className="shadow-xl shadow-black hover:shadow-pink-400
                    rounded-xl transition-all hover:rounded-full border-2 
                    hover:border-4 border-red-400" placeholder="Enter your password" /><br />
                    {errors.password && errors.password.type === "required" && (
                        <p className="errorMsg">
                            Password is required.
                        </p>)}
                </div>
                <div>
                    <button
                        className="mt-4 rounded-xl shadow-xl shadow-black 
                    hover:shadow-pink-400  transition-all hover:rounded-full 
                    border-2 hover:border-4 border-red-400 p-3 bg-green-300 
                    hover:bg-blue-300" type="submit">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form

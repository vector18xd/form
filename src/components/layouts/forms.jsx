import React, {useState} from "react";
import { Buttons } from "../UI/buttons";
import { Inputs } from "../UI/inputs";
import { TA } from "../UI/TA";
import email from "@emailjs/browser"
export const Forms = () =>{
    const [datas, setData]=useState({
        form:{
            "user_name":"",
            "email":"",
            "message":""
        },
        error:false,
        errorMsg:""
    })
    const login = (e) =>{
        e.preventDefault()
        const user = document.getElementById("user_name").value
        const emails = document.getElementById("email").value
        const messages = document.getElementById("message").value
        setData(
            datas.form.user_name=user,
            datas.form.email=emails,
            datas.form.message=messages
        )
        console.log(datas)
        post()
    }
    const post = ( ) =>{
        email.send("service_3ttevpo", "template_sla5daj",datas.form,"OZyZikHyRdk3lV1Zx")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    return(
        <div className="form">
            <form id="form" className="topBefore">

                <Inputs idI="user_name" types="text" place="Name"/>
                <Inputs idI="email" types="text" place="Email"/>
                <TA idI="message" types="text" place="Message"/>
                <Buttons idI="submit"  text="Enviar!" event={login}/>
            </form>
        </div>
    )
}
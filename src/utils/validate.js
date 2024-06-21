export const checkValidData = (email,password,fullName)=>{
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid = /[a-zA-Z]+\.?/.test(fullName)

    if(!isFullNameValid) return "Name is not valid";
    if(!isEmailValid) return "Email Id is not valid";

    if(!isPasswordValid) return "Password is not valid";

    
    return null;
}
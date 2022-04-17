import VerifyEmail from "App/Mailers/VerifyEmail";


export const sendMail = async () => {
  return await new VerifyEmail().send()
}

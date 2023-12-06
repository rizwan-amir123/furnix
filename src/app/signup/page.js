import SignUp from '.././components/SignUp.js'
import LogoImg from '../../../public/default-monochrome.svg'
export const metadata = {
  title: 'Sign Up',
  description: 'Sign Up Page',
}
export default function Home() {
  
  return (
    <SignUp src={LogoImg} />
  )
}
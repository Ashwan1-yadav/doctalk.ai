import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex h-[700px]  overflow-hidden">
    {/* Left half: Doctalk.ai image */}
    <div className="w-1/2 flex h-screen items-center justify-center bg-gray-100 ">
      <img className='h-full w-full' src="https://doctalk.in/dt/hero.jpg" alt="" />
    </div>
    {/* Right half: Clerk SignIn */}
    <div className="w-1/2 h-screen flex items-center justify-center">
      <SignUp />
    </div>
  </div>
 )
}
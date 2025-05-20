import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
<div className="min-h-screen flex items-center justify-center px-4 pt-20"> 
      <SignUp signInFallbackRedirectUrl={"/subscribe"}/>
    </div>
  );
}

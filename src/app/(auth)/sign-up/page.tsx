"use client";
// import AuthForm from '@/components/AuthForm';

import { FormEvent, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff } from "lucide-react";
import Loader from "@/components/Loader";

const SignUpPage = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    if(!isLoaded) return <Loader/>;

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if(!isLoaded) return <Loader />;
        try {
            const result = await signUp?.create({
                emailAddress,
                password,
            });

            if(result?.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/dashboard");
            }
            else {
                console.error(JSON.stringify(result, null, 2));
            }
        } catch (e: any) {
            console.error(JSON.stringify(e, null, 2));
            setError(e.errors[0].message);
        }
    }


    return (
      <>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col my-auto text-white space-y-6 justify-center h-screen-min w-4/5"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-12"> Sign Up </h1>
          <Label htmlFor="email">Email</Label>
          <Input
            variant={'outline'}
            type="email"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
          <Label htmlFor="password">Password</Label>
          <div className="relative">
          <Input
            variant={'outline'}
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
            </button>
          </div>
          {error && (
            <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
      </form>
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link 
          href="/sign-in"
          className="text-primary">Log In
        </Link>
      </p>
    </>
  )
}

export default SignUpPage;
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@repo/ui/components/ui/dialog";
import { Button } from "./Button";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaGithub } from "react-icons/fa"; // GitHub icon

const LoginButton = () => {
  const { data: session } = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
    >
      Logout
    </button>
  ) : (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className="bg-black/70 backdrop-blur-md border border-gray-700 shadow-lg 
      rounded-lg p-6 text-white max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Sign In Required</DialogTitle>
          <DialogDescription className="text-sm text-gray-300">
            Choose a sign-in method to continue using our chat app.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 mt-4">
          {/* Google Sign-in Button */}
          <Button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center space-x-2"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </Button>

          {/* GitHub Sign-in Button */}
          <Button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700"
          >
            <FaGithub className="text-xl" /> 
            <span>Sign in with GitHub</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;

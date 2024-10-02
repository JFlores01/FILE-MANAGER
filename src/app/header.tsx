import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="items-center container mx-auto justify-between flex">
        
          <Image src="/Secondary_Logo_Positive.png" width="250" height="250" alt="file drive logo" />
         

        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Tus archivos</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Iniciar Sesión</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

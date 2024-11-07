import { ToggleTheme } from "./ToggleTheme";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
function Header() {
  return (
    <header className="flex items-center justify-between container my-1">
      <ToggleTheme />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
export default Header;

import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <div className="px-10 pt-20">
        <form
          className="px-10 pt-[100px]"
          action={async () => {
            "use server";

            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          <Button type="submit">Log out</Button>
        </form>
      </div>
    </>
  );
};

export default Home;

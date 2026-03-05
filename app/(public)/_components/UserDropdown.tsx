import {
  ChevronDownIcon,
  LogOut,
  Home,
  BookOpenIcon,
  LayoutDashboard,
  User,
  User2Icon,
  User2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logout } from "@/modules/ui/Logout";
import Link from "next/link";

interface props {
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
  };
}

export function UserDropdown({ user: { name, email, image } }: props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="h-8 w-8">
            {image ? (
              <AvatarImage alt="Profile image" src={image} />
            ) : (
              <>
                <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
                <AvatarFallback>
                  {/* {name.split(" ").map((n) => n[0].toUpperCase())} */}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <ChevronDownIcon
            aria-hidden="true"
            className="opacity-60"
            size={16}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 rounded-xl p-2"
      >
        {/* User Info Section */}
        <div className="flex items-center gap-3 rounded-lg p-2">
          <Avatar className="h-9 w-9">
            {image ? (
              <AvatarImage alt="Profile image" src={image} />
            ) : (
              <>
                <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
                <AvatarFallback>
                  {/* {name.split(" ").map((n) => n[0].toUpperCase())} */}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">{email}</span>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 text-xs font-medium text-muted-foreground">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-2 py-2 text-sm"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-2 py-2 text-sm"
          >
            <Link href="/courses">
              <BookOpenIcon className="mr-2 h-4 w-4" />
              Courses
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            asChild
            className="cursor-pointer rounded-lg px-2 py-2 text-sm"
          >
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

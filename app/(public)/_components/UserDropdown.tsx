import {
  ChevronDownIcon,
  User,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logout } from "@/modules/ui/Logout"

export function UserDropdown({user:{name,email}}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
            <AvatarFallback>KK</AvatarFallback>
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
            <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">
              {email}
            </span>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 text-xs font-medium text-muted-foreground">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuItem className="cursor-pointer rounded-lg px-2 py-2 text-sm">
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer rounded-lg px-2 py-2 text-sm">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer rounded-lg px-2 py-2 text-sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem >
          <LogOut className="mr-2 h-4 w-4"  />
           <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
"use client"

import {
  IconDashboard,
  IconDotsVertical,
  IconLogout,
} from "@tabler/icons-react"

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
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { HomeIcon, Tv2 } from "lucide-react"
import useSignout from "@/hooks/useSignout"


export function NavUser() {
  
  const handelSignout = useSignout() ;

  const {data :session , isPending} = authClient.useSession() ;

  if(isPending) null ;
  const { isMobile } = useSidebar()


  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="session-[state=open]:bg-sidebar-accent session-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                {session?.user.image ? (
              <AvatarImage alt="Profile image" src={session?.user.image} />
            ) : (
              <>
                <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
                <AvatarFallback>
                  {session?.user?.email[0].toUpperCase()}
                </AvatarFallback>
              </>
            )}
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{session?.user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {session?.user.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                 {
                  session?.user.image?(
                    <AvatarImage alt="Profile image" src={session?.user.image} />
                  ):(
                    <>
                      <AvatarImage alt="Profile image" src="/origin/avatar.jpg" />
                      <AvatarFallback>
                  {session?.user?.email[0].toUpperCase()}
                </AvatarFallback>
                    </>
                  )
                 }
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{session?.user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {session?.user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
               <Link href="/">
                  <HomeIcon />
                  Homepage
               </Link>
              </DropdownMenuItem>
             <DropdownMenuItem asChild>
               <Link href="/admin">
                  <IconDashboard />
                  Dashboard
               </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
               <Link href="/courses">
                  <Tv2 />
                  Courses
               </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handelSignout}>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

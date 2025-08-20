"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/auth/auth-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  currentPath?: string
}

import {
  Home,
  Route,
  Bot,
  CheckSquare,
  TrendingUp,
  Trophy,
  Store,
  Settings,
  Heart,
  Flame,
  User,
  Star,
  Gem
} from "lucide-react"

// Navigation items
const items = [
  {
    title: "Inicio",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Tu camino",
    url: "/your-path",
    icon: Route,
  },
  {
    title: "Maxx AI",
    url: "/chat",
    icon: Bot,
  },
  {
    title: "Tasklist",
    url: "/tasklist",
    icon: CheckSquare,
  },
  {
    title: "Progreso",
    url: "/analytics",
    icon: TrendingUp,
  },
  {
    title: "Ranking",
    url: "/ranking",
    icon: Trophy,
  },
  {
    title: "Tienda",
    url: "/shop",
    icon: Store,
  },
]

export function AppSidebar({ currentPath, ...props }: AppSidebarProps) {
  const { user } = useAuth()
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="p-2 border-b space-y-2">
          <div className="flex items-center gap-2">
            <Link href="/profile" className="relative">
              <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                <AvatarImage src={user?.profileImage} alt={user?.name || "Profile"} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-xs truncate">
                  {user?.name || "Usuario"}
                </h3>
                <Link href="/settings">
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0 hover:bg-primary/10">
                    <Settings className="h-2.5 w-2.5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <Heart className="h-3 w-3 text-red-500" />
                  <span className="text-xs font-medium">5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span className="text-xs font-medium">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gamification Stats */}
          <div className="space-y-2">
            {/* XP Progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>XP</span>
                <span>150/1000</span>
              </div>
              <Progress value={15} className="h-1.5" />
            </div>

            {/* Stats Row */}
            <div className="flex justify-between text-xs">
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Flame className="w-3 h-3 text-orange-500" />
                <span>7</span>
              </div>
              <div className="flex items-center gap-1">
                <Gem className="w-3 h-3 text-blue-500" />
                <span>45</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="w-full"
                  >
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2">
          <div className="text-xs text-muted-foreground text-center">
            HealthMaxxing v1.0
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

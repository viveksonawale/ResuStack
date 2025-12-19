"use client";

import { useUser } from "@/components/providers/user-provider";
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
import { Button } from "@/components/ui/button";
import { Settings, LogOut, User as UserIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function UserProfile() {
    const { user, setSettingsOpen } = useUser();
    const initials = `${user.firstName[0]}${user.lastName[0]}`;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex justify-between items-center gap-2">

                    <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden hover:opacity-80 transition-opacity">
                        <Avatar className="h-10 w-10 border border-white/10">
                            <AvatarImage src={user.avatarUrl} alt={user.firstName} className="object-cover" />
                            <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                        {user.accountType === "premium" && (
                            <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-amber-400 border-2 border-background" />
                        )}
                    </Button>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.firstName} {user.lastName}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </div>


            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 border border-white/10 text-white z-[60]"
                align="end"
                style={{ backgroundColor: '#0f111a' }}
            >

                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem> */}
                    {user.accountType === "free" && (
                        <DropdownMenuItem className="text-indigo-400 focus:text-indigo-300 focus:bg-indigo-500/10">
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span>Upgrade to Pro</span>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

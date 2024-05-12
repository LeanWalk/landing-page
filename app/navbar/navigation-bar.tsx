"use client"

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";

import Logo from './logo';
  
const products: {title: string; description: string}[] = [
    {
        title: "Send money",
        description:
          "Send funds directly to mobile money wallets and linked bank accounts.",
      },
      {
        title: "Accept payment",
        description:
          "Accept end-to-end payments and allow your users to accept payments.",
      },
      {
        title: "Spend money",
        description:
          "Issue single-use virtual cards for your cusotomers.",
      },
      {
        title: "Peer-to-peer transfers",
        description: "Move funds across borders effortless.",
      },
      {
        title: "Store money",
        description:
          "Allow users to hold multi-currency for payouts or be used for merchant services.",
      },
      {
        title: "Simple screening",
        description:
          "Screen users and get one immediately if KYC checks is passed.",
      },
]



export function NavigationMenuBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className='hidden md:flex md:space-x-4'>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        PayVal
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                       Money transfer platform for high-street agents
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Launch">
                  Build and run money transfer business effortless.
                </ListItem>
                <ListItem title="Onboard">
                    Start onboarding customers hassle-free.
                </ListItem>
                <ListItem title="Expand">
                  Expand your network and customer reach. 
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink >
                Priicing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"
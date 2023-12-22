
"use client"

import {  ListItem } from "@mui/material";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
import Link from "next/link";

export function NavLink({ href, children }: { href: string, children: string }) {

    const pathName = usePathname();
    const isActive = pathName === href || pathName.startsWith(`${href}/`)

    return (
        <ListItem aria-selected={isActive} disablePadding dense >
            <Link className={isActive ? styles.active : styles.link} href={href} > {children} </Link>
        </ListItem>
    )
};
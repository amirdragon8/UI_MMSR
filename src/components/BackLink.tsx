import Link, { type LinkProps } from 'next/link'
import type { Route } from 'next'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styles from './BackLink.module.css'

export default function BackLink<T extends string>({
  href,
  prefetch,
  children,
}: {
  href: Route<T>
  prefetch?: LinkProps<T>['prefetch']
  children?: string
}) {
  return (
    <Link className={styles.link} prefetch={prefetch} href={href}>
      <ArrowBackIcon color='inherit' sx={{ height: 16, width: 16 }} />
      {children ?? 'Back'}
    </Link>
  )
}

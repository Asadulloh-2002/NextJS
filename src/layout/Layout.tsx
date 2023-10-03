import React from 'react'
import { LayoutProps } from './layout.props'
import { Footer, Navbar } from '../components'
import { Box } from '@mui/material'

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Navbar />
            <Box height={'100%'}>{children}</Box>
            <Footer />
        </>
    )
}

export default Layout
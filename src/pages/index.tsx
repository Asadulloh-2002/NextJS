import { Box, Button } from '@mui/material'
import React from 'react'
import Layout from '../layout/Layout'
import { Content, Hero, SideBar } from '../components'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <SideBar />
        <Content />
      </Box>
    </Layout>
  )
}

export default Index
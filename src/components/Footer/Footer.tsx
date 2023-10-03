import { Instagram, Telegram, Twitter } from "@mui/icons-material"
import { Box, ButtonGroup, Typography } from "@mui/material"
import { format } from "date-fns"

const Footer = () => {
    return (
        <Box
            padding={'20px'}
            sx={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#141414',
            color: 'white'
        }}>
            <Typography>© {format(new Date(), 'yyyy')} Next JS. Barcha huquqlar himoyalangan</Typography>
            <Box
                sx={{display: 'flex', alignItems: 'center', gap: 1}}
            >
                <Telegram sx={{cursor: 'pointer'}} /> 
                <Instagram sx={{cursor: 'pointer'}} />
                <Twitter sx={{cursor: 'pointer'}} />
            </Box>
        </Box>
    ) 
}

export default Footer
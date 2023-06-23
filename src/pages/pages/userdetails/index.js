import { Card, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'

const UserDetails = () => {

    const router = useRouter()

    const props = router.query;
    
    return (
        <Card sx={{padding:'2rem'}}>
        <Typography sx={{padding:'0 2rem'}} variant='h4'>User Details</Typography>
        <Box sx={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <TextField label='Username' variant='outlined' value={props.username}></TextField>
            <TextField label='Email' variant='outlined' value={props.email}></TextField>
            <TextField label='FirstName' variant='outlined' value={props.firstName}></TextField>
            <TextField label='LastName' variant='outlined' value={props.lastName}></TextField>
            <TextField label='Gender' variant='outlined' value={props.gender}></TextField>
        </Box>
        </Card>
    )
}

export default UserDetails

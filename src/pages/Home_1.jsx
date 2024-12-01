import React from 'react';
import { Button, Card, CardActions, CardContent, Grid2, Pagination, Stack, Typography } from '@mui/material'

const Home_1 = () => {
    return (
        <div>
            <div className="text-center bg-blue-500 text-white py-4">
                <h1 className="text-3xl font-bold">Welcome to Tailwind CSS</h1>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button variant="contained" color="primary">
                    Primary Button
                </Button>
                <Button variant="outlined" color="secondary" style={{ marginLeft: "10px" }}>
                    Secondary Button
                </Button>

                <Button sx={{ color: "white", backgroundColor: "blue" }}>Styled Button</Button>
            </div>

            <Grid2 container spacing={3} style={{ padding: "20px" }}>
                <Grid2 item xs={12}>
                    <Typography variant="h1" color="primary">
                        Welcome to MUI
                    </Typography>
                    <Typography variant="body1">
                        Material-UI helps you build modern, responsive web apps effortlessly.
                    </Typography>
                </Grid2>
            </Grid2>


            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        cs
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


            <Stack spacing={2}>
                <Pagination count={10} color="primary" />
                <Pagination count={10} variant="outlined" color="secondary" />
            </Stack>
        </div>
    )
}

export default Home_1

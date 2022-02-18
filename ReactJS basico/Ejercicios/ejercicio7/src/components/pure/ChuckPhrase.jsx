import {  Avatar, Card, CardContent, Container, Typography } from '@mui/material';
import React from 'react';

const Chuckphrase = (joke) => {

    return (
        <Card variant='outlined'>
            <Avatar 
                variant="rounded"
                alt="Chuck Norris icon" 
                src={joke.joke.icon_url} 
                sx={{ mx: "auto", mt: 2, width: 56, height: 56 }}
                />
            <CardContent>
                <Typography sx={{ fontStyle: 'oblique', fontWeight: 'medium' }}>
                    {joke.joke.value}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Chuckphrase;

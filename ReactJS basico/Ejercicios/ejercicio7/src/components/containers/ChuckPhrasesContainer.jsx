import { Badge, Button, Container, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../services/chuckJokesService';
import Chuckphrase from '../pure/ChuckPhrase';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumDownIcon from '@mui/icons-material/ThumbDown';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Chuckphrasescontainer = () => {

    const [joke, setJoke] = useState({});
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        obtainRandomJoke();
    }, []);

    const obtainRandomJoke = () => {
        getRandomJoke()
            .then((response) => {
                console.log(`Response: ${JSON.stringify(response.data)}`)
                setJoke(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log('Random Joke obtained');
            })
    }

    const addLike = () => {
        setLikes(likes + 1);
        obtainRandomJoke();
    }

    const addDislike = () => {
        setDislikes(dislikes + 1);
        obtainRandomJoke();
    }

    return (
        <Container maxWidth="sm" >
                <Box m={3}>
                    <Button onClick={obtainRandomJoke} variant="contained" endIcon={<AutorenewIcon/>}>
                        <b>New</b>
                    </Button>
                </Box>
                <Box m={3}>
                    <Chuckphrase joke={joke}/>
                </Box>
                <Box m={3}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Badge badgeContent={likes} color="primary">
                                <IconButton onClick={addLike} color="success" aria-label="Like">
                                    <ThumbUpIcon />
                                </IconButton>
                            </Badge>   
                        </Grid>
                        <Grid item xs={6}>
                            <Badge badgeContent={dislikes} color="primary">
                                <IconButton onClick={addDislike} color="error" aria-label="Dislike">
                                    <ThumDownIcon />
                                </IconButton>
                            </Badge>   
                        </Grid>
                    </Grid>
                </Box>
        </Container>
    );
}

export default Chuckphrasescontainer;

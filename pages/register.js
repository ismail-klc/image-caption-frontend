
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';
import actions from '../redux/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: theme.spacing(20),
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp(props) {
    const classes = useStyles();
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.register(first_name,last_name,username,email,password,password2)
    }

    return (
        <Layout title="Sign Up">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{ marginTop: '35px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px' }}>
                    <Avatar style={{ margin: '10px' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form style={{ width: '100%', marginTop: '1rem' }} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    value={first_name}
                                    onChange={e => setFirstName(e.target.value)}
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    value={last_name}
                                    onChange={e => setLastName(e.target.value)}
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    required
                                    fullWidth
                                    label="Username"
                                    name="text"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={password2}
                                    onChange={e => setPassword2(e.target.value)}
                                    name="password"
                                    label="Password Again"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ margin: '2rem 0 1rem' }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-start">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Layout>
    );
}

export default connect(
    state => state,
    actions
)(SignUp)
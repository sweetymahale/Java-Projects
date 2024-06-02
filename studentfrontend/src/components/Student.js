import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(name);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headeres: { "content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Added new student");
        }).catch((error) => {
            console.log(error);
        }
        );

    }
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}> Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 }
                    }}
                    noValidate
                    autoComplete="off"

                >

                    <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                    {name}{address}

                    <Button color="secondary" onClick={handleClick}>Submit</Button>

                </Box>
            </Paper>
        </Container>
    );
}

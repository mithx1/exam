import { Container, Box, Typography, TextField } from "@mui/material";
import "./App.css";
import MainGrid from "./components/MainGrid";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("1,1 NORTH");

  return (
  <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <TextField
            fullWidth
            label="Position Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="1,1 NORTH"
            margin="normal"
          />
          <Box sx={{ mt: 3 }}>
            <MainGrid input={input} />
          </Box>
        </Box>
      </Container>
  );
}

export default App;

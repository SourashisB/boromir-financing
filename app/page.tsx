"use client"

import React from "react";
import { TextfieldHelperLabel } from "@/components/TextFields";
import { CustomButtonLink } from "@/components/Button";
import Paper from '@mui/material/Paper'
import { CustomSnackbar } from "@/components/PopupNot";
import { Container } from "@mui/material";

const labeltext = "Hi What's up"
export default function Home() {
  return (
    <div>
      <Container maxWidth={'lg'}>
        <Paper sx={{
          position: 'relative',
          backgroundColor: 'secondary'
        }}>
          <CustomSnackbar message="Nic u a ho" buttonText="Click me Nic" />
        </Paper>
      </Container>
      <CustomButtonLink buttonLink="/landing" buttonText="Landing page" onClickFunction={{}} />
    </div>
  )
}


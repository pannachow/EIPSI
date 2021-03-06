import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { useRef } from "react";
import { IconButton } from "@material-ui/core";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
  },
  title1_1: {
    color: "#02E8E8",
  },
  title2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
    paddingBottom: "20px",
  },
  title3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    paddingBottom: "20px",
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "50px",
    paddingBottom: "10px",
  },
  emoji: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    textAlign: "center",
  },
  textArea: {
    width: "100%",
    height: "91px",
    left: "193px",
    top: "1477px",
    background: "#A9F6FF",
    borderRadius: "20px",
  },
  button: {
    backgroundColor: "#660362",
    color: "white",
    float: "right",
    fontWeight: 600,
  },
  clear: {
    position: "absolute",
    top: "10px",
    left: "20px",
    zIndex: 100,
  },
};

export default function Day21() {
  const canvasRef = useRef();

  return (
    <>
      <Box alignItems="left">
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 2 : <span style={styles.title1_1}>Card 1</span>
        </Typography>

        <Typography gutterBottom style={styles.title2}>
          Draw a face that shows how confident you are with using evidence informed data
        </Typography>
      </Box>

      <Container maxWidth="sm">
        <Box position="relative">
          <CanvasDraw
            ref={canvasRef}
            brushRadius={2}
            canvasWidth="100%"
            canvasHeight={600}
            brushColor="black"
            imgSrc="head.png"
          />
          <IconButton onClick={() => canvasRef.current.clear()} style={styles.clear}>
            <img alt="vector" src="vector.svg" />
          </IconButton>
        </Box>
      </Container>
      <Box>
        <Typography style={styles.title4}>
          Select an Emoji that expresses the attitude towards the Evidence based practices.
        </Typography>
      </Box>
      <Box py={5}>
        <Grid container spacing={3} style={styles.emoji}>
          <Grid item xs={3}>
            <img alt="Motivated" src="motivated.png" />
            <Typography style={styles.emoji}>Motivated</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="No Feelings" src="no_feelings.png" />
            <Typography style={styles.emoji}>No Feelings</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="Curious" src="curious.png" />
            <Typography style={styles.emoji}>Curious</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="Annoyed" src="annoyed.png" />
            <Typography style={styles.emoji}>Annoyed</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="Happy" src="happy.png" />
            <Typography style={styles.emoji}>Happy</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="Boring" src="boring.png" />
            <Typography style={styles.emoji}>Boring</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="No Idea What It Is" src="no_idea_what_it_is.png" />
            <Typography style={styles.emoji}>No Idea What It Is</Typography>
            <Checkbox />
          </Grid>
          <Grid item xs={3}>
            <img alt="Angry" src="angry.png" />
            <Typography style={styles.emoji}>Angry</Typography>
            <Checkbox />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          Tell us why you feel like this towards the Evidence based Practices.
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <Box>
        <Typography style={styles.title4}>Name</Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <Box>
        <Typography style={styles.title4}>Email</Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/submit">
        SUBMIT
      </Button>
    </>
  );
}

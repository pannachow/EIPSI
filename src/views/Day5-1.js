import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const styles = {
  title1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#A9F6FF",
    fontWeight: 600,
    fontSize: "72px",
    lineHeight: "108px",
    paddingTop: "50px",
  },
  title1_1: {
    color: "#02E8E8",
  },
  title2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "54px",
  },
  title3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#3487C0",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  title4: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#0C4D7A",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "50px",
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
    fontWeight: 600
  },
};

export default function Day2() {
  return (
    <Container>
      <Box alignItems="left">
        <Typography variant="h2" style={styles.title1} gutterBottom>
          DAY 5 : <span style={styles.title1_1}>Card 1</span>
        </Typography>

        <Typography gutterBottom style={styles.title2}>
          Draw it!
        </Typography>

        <Typography gutterBottom style={styles.title3}>
          What were your feelings as a teacher during the week? Draw the line representing the week.
        </Typography>

        <Typography gutterBottom style={styles.title3}>
          Add a comment to highlight the crucial points{" "}
        </Typography>
      </Box>

      <CanvasDraw
        brushRadius={2}
        canvasWidth="100%"
        canvasHeight={500}
        brushColor="#A9F6FF"
        imgSrc="feelings_table.png"
      />
      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          What is something we haven't asked but you would like to tell us?{" "}
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
      <br />
      <br />
      <Button variant="contained" style={styles.button} component={Link} to="/Submit">
        SUBMIT
      </Button>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

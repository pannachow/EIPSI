import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const styles = {
  title2: {
    color: "#3487C0",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "54px",
  },
  title3: {
    color: "#3487C0",
    fontSize: "24px",
    lineHeight: "36px",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  title4: {
    color: "#0C4D7A",
    fontSize: "36px",
    lineHeight: "54px",
    paddingTop: "50px",
    paddingBottom: "10px",
  },
  textArea: {
    width: "100%",
    height: "300px",
    background: "#A9F6FF",
    borderRadius: "20px",
  },
};

export default function Day52() {
  return (
    <>
      <Box>
        <Typography style={styles.title2} gutterBottom>
          Note to Self!
        </Typography>

        <Typography style={styles.title3}>
          Write a note to yourself about what you would like to do different regarding your teaching
          or classroom experience.
        </Typography>
        <Typography style={styles.title3} gutterBottom>
          Think about diversity, inclusivity and research-informed practices.{" "}
        </Typography>
      </Box>
      <br />
      <input type="text" style={styles.textArea} />
      <br />
      <Box>
        <Typography style={styles.title4}>Done for the day? Before you head out . . . .</Typography>
        <Typography style={styles.title3} gutterBottom>
          What is something we haven't asked but you would like to tell us?
        </Typography>
        <input type="text" style={styles.textArea} />
      </Box>
    </>
  );
}

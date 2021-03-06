import { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = {
  text: {
    fontWeight: 600,
    fontSize: "18px",
  },
};

const defaultFigures = [
  { id: 1, location: "available", src: "openmoji_man-student-medium-skin-tone.png" },
  {
    id: 2,
    location: "available",
    src: "openmoji_woman-student-medium-dark-skin-tone.png",
  },
  { id: 3, location: "available", src: "openmoji_student.png" },
  { id: 4, location: "available", src: "openmoji_woman-student.png" },
  { id: 5, location: "available", src: "openmoji_man-student-medium-skin-tone.png" },
  {
    id: 6,
    location: "available",
    src: "openmoji_woman-student-medium-dark-skin-tone.png",
  },
  { id: 7, location: "available", src: "openmoji_student.png" },
  { id: 8, location: "available", src: "openmoji_woman-student.png" },
  { id: 9, location: "available", src: "openmoji_man-student-medium-skin-tone.png" },
  {
    id: 10,
    location: "available",
    src: "openmoji_woman-student-medium-dark-skin-tone.png",
  },
  { id: 11, location: "available", src: "openmoji_student.png" },
  { id: 12, location: "available", src: "openmoji_woman-student.png" },
];

export default function DragAndDrop() {
  const borderSize = 3;
  const borderColor = "#ff0000";
  const [figures, setFigures] = useState(defaultFigures);
  const figuresRef = useRef();
  figuresRef.current = figures;
  const [isDragging, setIsDragging] = useState(false);

  function onDrop(figure, location) {
    const figureIndex = figuresRef.current.findIndex((f) => f.id === figure.id);
    const newFigures = figuresRef.current.slice();
    newFigures.splice(figureIndex, 1);
    newFigures.push({ ...figure, location });
    setFigures(newFigures);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <IconButton onClick={() => setFigures(defaultFigures)} style={styles.clear}>
            <img alt="vector" src="vector.svg" />
          </IconButton>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {figures
              .filter((figure) => figure.location === "available")
              .map((figure) => (
                <Draggable key={figure.id} figure={figure} setIsDragging={setIsDragging} />
              ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={6}>
              <Box p={1} border={borderSize} borderLeft={0} borderTop={0} borderColor={borderColor}>
                <DropArea
                  figures={figures.filter((figure) => figure.location === "a")}
                  onDrop={(figure) => onDrop(figure, "a")}
                  isDragging={isDragging}
                  setIsDragging={setIsDragging}
                >
                  <Typography style={styles.text} align="right">
                    Other
                  </Typography>
                  <Typography style={styles.text} align="right">
                    Teachers /
                  </Typography>
                  <Typography style={styles.text} align="right">
                    Colleagues
                  </Typography>
                </DropArea>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                p={1}
                border={borderSize}
                borderRight={0}
                borderTop={0}
                borderColor={borderColor}
              >
                <DropArea
                  figures={figures.filter((figure) => figure.location === "b")}
                  onDrop={(figure) => onDrop(figure, "b")}
                  isDragging={isDragging}
                  setIsDragging={setIsDragging}
                >
                  <Typography style={styles.text} align="left">
                    Researchers
                  </Typography>
                  <Typography style={styles.text} align="left">
                    &nbsp;
                  </Typography>
                </DropArea>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={1} borderTop={borderSize} borderColor={borderColor}>
                <DropArea
                  figures={figures.filter((figure) => figure.location === "c")}
                  onDrop={(figure) => onDrop(figure, "c")}
                  isDragging={isDragging}
                  setIsDragging={setIsDragging}
                >
                  <Typography style={styles.text} align="center">
                    Other (family, friends etc) -
                  </Typography>
                  <Typography style={styles.text} align="center">
                    Please Specify
                  </Typography>
                </DropArea>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DndProvider>
  );
}

function DropArea({ children, figures, onDrop, isDragging, setIsDragging }) {
  const [, drop] = useDrop(() => ({
    accept: "student",
    drop: onDrop,
  }));

  return (
    <Box
      ref={drop}
      bgcolor="#F4CE12"
      borderRadius="10px"
      p={1}
      height={280}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {figures.map((figure) => (
          <Draggable key={figure.id} figure={figure} setIsDragging={setIsDragging} />
        ))}
      </Box>
    </Box>
  );
}

function Draggable({ figure, setIsDragging }) {
  const size = "92px";

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "student",
      item: () => {
        setIsDragging(true);
        return figure;
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
      end: () => setIsDragging(false),
    }),
    []
  );

  return (
    <Box
      width={size}
      height={size}
      ref={dragRef}
      style={{
        opacity,
        backgroundImage: `url(${figure.src})`,
        backgroundSize: "110%",
        backgroundPosition: "center center",
        cursor: "pointer",
      }}
    />
  );
}

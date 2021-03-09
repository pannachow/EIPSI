import React from "react";
import Grid from "@material-ui/core/Grid";
import DayGridItem from "./DayGridItem";

export default function ProductCategories() {
  const images = [
    {
      url: "day-1-card-enabled.png",
      width: "25%",
      size: 3,
      routes: [
        { name: "Card 1", to: "/day1-1" },
        { name: "Card 2", to: "/day1-2" },
        { name: "Card 3", to: "/day1-3" },
      ],
    },
    {
      url: "day-2-card-enabled.png",
      width: "50%",
      size: 6,
      routes: [
        { name: "Card 1", to: "/day2-1" },
        { name: "Card 2", to: "/day2-2" },
        { name: "Card 3", to: "/day2-3" },
      ],
    },
    {
      url: "day-3-card-enabled.png",
      width: "25%",
      size: 3,
      routes: [
        { name: "Card 1", to: "/day3-1" },
        { name: "Card 2", to: "/day3-2" },
        { name: "Card 3", to: "/day3-3" },
      ],
    },
    {
      url: "day-4-card-enabled.png",
      width: "45%",
      size: 5,
      routes: [
        { name: "Card 1", to: "/day4-1" },
        { name: "Card 2", to: "/day4-2" },
        { name: "Card 3", to: "/day4-3" },
      ],
    },
    {
      url: "day-5-card-enabled.png",
      width: "55%",
      size: 7,
      routes: [
        { name: "Card 1", to: "/day5-1" },
        { name: "Card 2", to: "/day5-2" },
        { name: "Card 3", to: "/day5-3" },
      ],
    },
  ];

  return (
    <Grid container spacing={1}>
      {images.map((image) => (
        <Grid item xs={12} sm={image.size}>
          <DayGridItem image={image} />
        </Grid>
      ))}
    </Grid>
  );
}

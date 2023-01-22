import Link from "next/link";
// mui
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// components
import Date from "./date";
import CoverImage from "./cover-image";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontFamily: "LufgaBold",
  },
  date: {
    color: "#cdcdcd",
  },
}));

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <CoverImage
        slug={slug}
        title={title}
        responsiveImage={coverImage.responsiveImage}
      />
      <Box component="section" mt={2}>
        <Typography variant="h6" gutterBottom style={{ display: "block" }}>
          <Link as={`/blogs/${slug}`} href="/blogs/[slug]">
            <a className={classes.title}>{title}</a>
          </Link>
        </Typography>
        <Typography component="a" variant="body2" className={classes.date}>
          <Date dateString={date} />
        </Typography>
        <Typography color="textSecondary" style={{ marginTop: 16 }}>
          {excerpt}
        </Typography>
      </Box>
    </Grid>
  );
}

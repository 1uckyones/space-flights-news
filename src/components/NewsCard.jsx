import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

function NewsCard({ article }) {
  return (
    <Card sx={{}}>
      <Link href={article.url} underline="none">
        <CardMedia component="img" height="140" image={article.imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color="black">
            {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {article.newsSite}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default NewsCard;

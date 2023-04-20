import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/book";
import { useFetchData } from "../hooks/useFetchData";

export default function () {
  const { id } = useParams();

  // getBookById
  const {
    data: book,
    error,
    loading,
  } = useFetchData({
    fetcher: () => getBookById(id),
  });

  if (loading) {
    return <CircularProgress />;
  }

  console.log(book);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <img
            style={{ width: "100%" }}
            src={book.coverImageURL}
            alt={book.title}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h3">{book.title}</Typography>
          <Typography variant="body1">{book.author}</Typography>
          <Divider sx={{my:2}} />
          <Typography variant="body1">
            Owned by {book.owner.firstName}
            {book.owner.lastName}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{my:2}} />
      <Typography variant="h3">Description</Typography>
      <Typography variant="body1">{book.description}</Typography>
    </Box>
  );
}

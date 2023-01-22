import Box from "@mui/material/Box";

export default function PostBody({ content }) {
  return (
    <Box className="max-w-2xl mx-auto">
      <Box dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

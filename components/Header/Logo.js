import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logoBG: {
    fill:
      theme.colorScheme === "dark"
        ? theme.colors.brand[2]
        : theme.colors.brand[9],
  },
  logoStroke: {
    stroke:
      theme.colorScheme === "dark"
        ? theme.colors.brand[9]
        : theme.colors.dark[0],
  },
}));

export function Logo(props) {
  const { classes } = useStyles();

  return (
    <div >
      <h3>Micro Blogs</h3>
    </div>
  );
}

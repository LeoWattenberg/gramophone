import styled from "@emotion/styled";
import { yellowDark } from "@radix-ui/colors";

const A = styled.a({
  textDecoration: "none",
  color: yellowDark.yellow12,
  transition: "color 120ms ease-in-out",

  "&:hover": {
    color: yellowDark.yellow11,
    transition: "color 60ms ease-in-out",
  },
});

export default A;

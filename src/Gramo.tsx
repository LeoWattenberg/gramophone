import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import A from "./ui/A";
import Unsplash from "./ui/Unsplash";

const nTable: Record<string, string> = {
  1: "st",
  2: "nd",
  3: "rd",
  11: "th",
  12: "th",
  13: "th",
};

const nth = (n: string) => {
  if (nTable[n] !== undefined) return nTable[n];

  const modN = Number(n) % 10;
  return nTable[modN] !== undefined ? nTable[modN] : "th";
};

const images = {
  vinyl: "photo-1510100831744-b8d7fea7ca2e",
  vinylAlt: "photo-1526269982786-96fcd6b53d45",
  tape: "photo-1494232410401-ad00d5433cfa",
  brownGradient: "photo-1616714192343-fd8ba7a853f1",
};

const typeImages = {
  free: images.tape,
  themed: images.vinyl,
};

const GramoView = styled.div({
  display: "grid",
  gridTemplateAreas: `"main"`,

  "& > *": {
    gridArea: "main",
  },

  "& > *:after": {
    content: `""`,
    gridArea: "main",
    paddingTop: "100%",
    pointerEvents: "none",
  },
});

const Cover = styled.div({
  padding: "1em",
  display: "grid",
  gridTemplateRows: "auto 1fr",
});

const Title = styled.div({
  color: "white",
  fontSize: "1.0rem",
  textTransform: "uppercase",
});

const Nth = styled.span({
  fontSize: "0.7em",
  fontWeight: "400",
  textTransform: "uppercase",
});

const Theme = styled.div({
  color: "white",
  fontSize: "2em",
  fontWeight: "200",
  justifySelf: "center",
  alignSelf: "center",
});

type Props = PropsWithChildren<{
  id: string;
  url: string;
  imgId?: string;
}>;

const Gramo = ({ id, url, imgId, children }: Props) => {
  const img = () => {
    if (imgId) return imgId;
    if (children) return typeImages.themed;
    return typeImages.free;
  };

  const isFree = imgId === undefined && children === undefined;

  return (
    <GramoView>
      <Unsplash id={img()} hue={isFree ? (Number(id) % 16) / 15 : 0}>
        <A href={url}>
          <Cover>
            <Title>
              {id}
              <Nth>{nth(id)}</Nth> Gramophone
            </Title>
            {children && <Theme>{children}</Theme>}
          </Cover>
        </A>
      </Unsplash>
    </GramoView>
  );
};

export default Gramo;

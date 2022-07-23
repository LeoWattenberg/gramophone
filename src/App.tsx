import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { mauveDark } from "@radix-ui/colors";
import gramophones from "./data/gramophones.json";
import Gramo from "./Gramo";
import Logo from "./Logo";
import Grid from "./ui/Grid";

type Gramo = {
  url: string;
  theme?: string;
  imgId?: string;
};

type GramoList = {
  [key: number]: Gramo;
};

const AppView = styled.div({
  margin: "auto",
  maxWidth: "108rem",
  padding: "2em",
});

const Header = styled.header({});

const fonts = ["Inter:wght@100..900"];
const fq = (name: string) => `family=${name}`;
const fontString = `https://fonts.googleapis.com/css2?${fonts.map(fq).join("&")}&display=swap`;

type FilterType = "all" | "free" | "themed";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("${fontString}");
        `}
      />
      <Global
        styles={{
          html: {
            minHeight: "100vh",
          },
          body: {
            backgroundColor: mauveDark.mauve3,
            fontWeight: "300",
            fontFamily: `"Inter", sans-serif`,
          },
        }}
      />
      <AppView className="App">
        <Grid>
          <Header css={{ gridColumn: "1 / -1" }}>
            <Logo css={{ maxWidth: "30em" }} />
            <p css={{ color: mauveDark.mauve11 }}>
              Playlists from the Gramophone listening party events in the Tantacrul Discord server
            </p>
          </Header>
          {Object.entries(gramophones as GramoList)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map(([key, { url, theme, imgId }]) => (
              <Gramo id={key} url={url} imgId={imgId}>
                {theme}
              </Gramo>
            ))}
        </Grid>
      </AppView>
    </>
  );
}

export default App;

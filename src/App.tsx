import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { mauveDark } from "@radix-ui/colors";
import gramophones from "./data/gramophones.json";
import Gramo from "./Gramo";
import Logo from "./Logo";
import A from "./ui/A";
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
          <Header css={{ gridColumn: "1 / -1", color: mauveDark.mauve11 }}>
            <Logo css={{ maxWidth: "30em" }} />
            <p>
              Playlists from the Gramophone listening party events in the{" "}
              <A href="https://discord.gg/bW7RjkNb5z">Tantacrul Discord server</A>.
            </p>
            <p css={{}}>
              Each playlist contains songs from a diverse range of genres submitted by a diverse
              range of people, allowing you to break out of endlessly similar algorithmic
              recommendations.
            </p>
          </Header>
          {Object.entries(gramophones as GramoList)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map(([key, { url, theme, imgId }]) => (
              <Gramo key={key} id={key} url={url} imgId={imgId}>
                {theme}
              </Gramo>
            ))}
        </Grid>
      </AppView>
    </>
  );
}

export default App;

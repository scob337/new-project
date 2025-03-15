import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayOut from "./Layouts/MainLayOut.jsx";
import { Helmet } from "react-helmet";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cadonizer</title>
      <meta
        name="description"
        content="A modern and elegant interior design studio."
      />
      <meta
        name="keywords"
        content="interior design, modern design, minimalist design, minimalist living"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>

    <MainLayOut />
  </StrictMode>
);

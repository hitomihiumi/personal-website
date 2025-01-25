const baseURL = "hitomihiumi.xyz";

const routes = {
  "/": true,
  "/projects": true,
}

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "inverse", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "HitomiHiumi",
  description: "Yet another developer.",
};

// default open graph data
const og = {
  title: "HitomiHiumi",
  description: "Yet another developer.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "/trademark/icon.png",
  type: "Person",
  name: "HitomiHiumi",
  description: "Yet another developer.",
  email: "",
};

export { baseURL, style, meta, og, schema, routes };

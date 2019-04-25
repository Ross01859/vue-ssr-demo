const Vue = require("vue");
const server = require("express")();
const fs = require("fs");
const path = require("path");
const { createBundleRenderer } = require("vue-server-renderer");
const resolve = file => path.resolve(__dirname, file);

const serverBundle = require("./dist/vue-ssr-server-bundle.json");
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template: fs.readFileSync("./ssr.tem.html", "utf-8"),
  clientManifest: require("./dist/vue-ssr-client-manifest.json"), // （可选）客户端构建 manifest
  basedir: resolve("./dist")
});

server.get("*", (req, res) => {
  // const app = new Vue({
  //   data: {
  //     url: req.url,
  //     title: "vue-ssr",
  //     header: req.headers,
  //     host: req.domain,
  //     meta: `<meta chartset="utf-8">`
  //   },
  //   template: fs.readFileSync("./ssr.tem.html", "utf-8")
  // });
  const context = {
    title: "Vue SSR demo", // default title
    url: req.url,
    meta: `<meta chartset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">`
  };

  renderer.renderToString(context, (err, html) => {
    if (err) throw err;
    console.log(html);
    res.end(html);
  });
});

server.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(3000, () => {
  console.log("server is running listening http://localhost:3000");
});

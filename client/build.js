import * as esbuild from "esbuild";
import * as fs from "fs-extra";
import * as fs02 from "fs";

async function build() {
  try {
    // TSファイルをバンドル・コンパイルして dist/main.js に出力
    await esbuild.build({
      entryPoints: ["src/main.ts"],
      bundle: true,
      outfile: "dist/main.js",
      sourcemap: true,
      minify: false,
    });

    // index.html を dist にコピー
    await fs.copy("index.html", "dist/index.html");
    await fs.copy("src/styles/main.css", "dist/main.css");
    await fs.copy("images/icon.png", "dist/icon.png");
    await fs.copy("manifest.json", "dist/manifest.json");

    const filePath = "dist/index.html";
    let html = fs02.readFileSync(filePath, "utf-8");
    html = html.replace(/src="dist\/main\.js"/g, 'src="./main.js"');
    fs02.writeFileSync(filePath, html, "utf-8");

    let css = fs02.readFileSync(filePath, "utf-8");
    css = css.replace(
      /href="\.\/src\/styles\/main\.css"/g,
      'href="./main.css"'
    );
    fs02.writeFileSync(filePath, css, "utf-8");

    let icon = fs02.readFileSync(filePath, "utf-8");
    icon = icon.replace(/href="\.\/images\/icon\.png"/g, 'href="./icon.png"');
    fs02.writeFileSync(filePath, icon, "utf-8");

    console.log("Build successful!");
  } catch (err) {
    console.error("Build failed:", err);
    process.exit(1);
  }
}

build();

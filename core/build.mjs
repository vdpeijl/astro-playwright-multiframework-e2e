import * as esbuild from "esbuild";

async function build() {
  try {
    const ctx = await esbuild.context({
      entryPoints: ["src/index.ts"],
      bundle: true,
      minify: true,
      sourcemap: true,
      outdir: "../apps/client/public",
    });

    await ctx.watch();
    console.log("Watching for changes...");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

build();

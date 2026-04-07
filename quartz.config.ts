import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "João Pedro V. da Costa",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "jpvanacor.github.io/quartz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather",
        body: "Literata",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",           // Warm cream background
          lightgray: "#e8dcc5",       // Soft tan borders
          gray: "#c9b18c",            // Muted gold
          darkgray: "#5a4a3a",        // Warm dark brown text
          dark: "#3d2e1f",            // Deep chocolate headers
          secondary: "#b5651d",       // Burnt orange links
          tertiary: "#d4916a",        // Terracotta hover
          highlight: "rgba(181, 101, 29, 0.12)",  // Warm orange highlight
          textHighlight: "#f4c84a88",  // Soft yellow
        },
        darkMode: {
          light: "#1c1410",           // Deep espresso background
          lightgray: "#2d2419",       // Dark chocolate borders
          gray: "#5a4a3a",            // Warm brown
          darkgray: "#c9b18c",        // Warm beige text
          dark: "#e8dcc5",            // Cream headers
          secondary: "#e9a762",       // Warm amber links
          tertiary: "#d4916a",        // Terracotta hover
          highlight: "rgba(233, 167, 98, 0.15)",  // Warm glow
          textHighlight: "#f4c84a44",  // Dim yellow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

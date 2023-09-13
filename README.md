| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 What is this?

This site uses Astro's view transition between pages and HTMx for comments together with Tailwind for design and layout. The site is not connected to a real API.
The API is located in the /pages/api/ folder.

It has no reponsive design.

HTMx only works after page change if htmx.process(document.body) is executed. If not, HTMx will not regonize DOM changes and will stop working. HTMx.process is executed as a script in the head.

Firefox isn't currently supporting the view transition API and therefore this site should run in Google Chrome.

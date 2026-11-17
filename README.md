# SeatRota

Team scheduling for Cal.diy. This repository is the SeatRota website, a static page published with GitHub Pages.

Works with Cal.diy. SeatRota is an independent project.

## Local preview

From the repository root:

```sh
python3 -m http.server 8765
```

Then open the site on localhost. `index.html` is the whole page. Styles, the page script, the fonts, and the social image are local files.

## Publish

GitHub Pages deploys the site with [`.github/workflows/pages.yml`](.github/workflows/pages.yml) (`actions/deploy-pages`) when `main` changes. The live site is [https://seatrota.github.io](https://seatrota.github.io).

## License

The website code is [MIT](LICENSE).

Schibsted Grotesk and Martian Mono are included under the SIL Open Font License, in [`fonts/OFL-SchibstedGrotesk.txt`](fonts/OFL-SchibstedGrotesk.txt) and [`fonts/OFL-MartianMono.txt`](fonts/OFL-MartianMono.txt).

SeatRota add-on packages are licensed AGPL-3.0. The Cal.diy snapshot they build on stays MIT. Those packages are not in this repository.

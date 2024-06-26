# Focus Safari Extension

> Block distracting websites during focus times

It will block a list of websites that you specify during a period of time. In my case, it will open [Things](https://culturedcode.com/things/) app instead and black the page out when accessing a website during `focus times`. You can program it to do something else and/or change the schedule/websites.

Shown in action [here](https://twitter.com/nikitavoloboev/status/1780226797575065665).

## Run

Open project in Xcode.

Edit [content.js](<Shared%20(Extension)/Resources/content.js>) file. The `urls` variable holds the websites to block. There is also schedule defined inside. Edit it for your own use.

Edit [manifest.json](<Shared%20(Extension)/Resources/manifest.json>), `content_scripts`/`matches` to include the websites too.

Build extension in Xcode and activate it in Safari settings (give permissions to websites there too).

## Contribute

Always open to useful ideas or fixes in form of issues or PRs.

Can [open new issue](../../issues/new/choose) (search [existing issues](../../issues) first) or [start discussion](../../discussions).

It's okay to submit draft PR as you can get help along the way to make it merge ready.

Join [Discord](https://discord.com/invite/TVafwaD23d) for more indepth discussions on this repo and [others](https://github.com/nikitavoloboev#src).

### 🖤

[Support on GitHub](https://github.com/sponsors/nikitavoloboev) or look into [other projects](https://nikiv.dev/projects).

[![Discord](https://img.shields.io/badge/Discord-100000?style=flat&logo=discord&logoColor=white&labelColor=black&color=black)](https://discord.com/invite/TVafwaD23d) [![X](https://img.shields.io/badge/nikitavoloboev-100000?logo=X&color=black)](https://twitter.com/nikitavoloboev) [![nikiv.dev](https://img.shields.io/badge/nikiv.dev-black)](https://nikiv.dev)

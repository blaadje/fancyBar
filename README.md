# FancyBar

Personal [Übersicht](http://tracesof.net/uebersicht/) system information bars for use with [chunkwm]

*Screen Shots:*
![img](https://user-images.githubusercontent.com/24897042/47940515-20933800-deeb-11e8-82dd-d3c7002cd718.png)

The original widget created by [Andy Pierz](https://github.com/apierz?tab=overview&from=2018-09-01&to=2018-09-30) can be found [here](https://github.com/apierz/nerdbar.widget).

### Ubersicht

---

Übersicht creates a webview and places it on your desktop, just above the wallpaper but behind everyting else.
This plugin is written in `.jsx` 

## Installation

```bash
https://github.com/blaadje/fancyBar.git $HOME/Library/Application\ Support/Übersicht/widgets/chunkbar.widget
```

or to your current widget directory if you have changed it. The scripts may require installing some additional packages, such as Python, but all are available via homebrew.

The icons require the use of extra fonts:

- FontAwesome

That have to be installed system wide.

Enjoy :) don't hesitate to open issues if you have any trouble

## Enhancement

This plugins is refreshing every second to make the datas up to date. That is taking a lots of battery usage and should be improved to update infos by chunkwm queries. Don't hesitate to fork if you have some ideas :)

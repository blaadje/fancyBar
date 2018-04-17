command: "sh ./scripts/screens"

refreshFrequency: 2000 # ms

render: (output) ->
  """
    <link rel="stylesheet" type="text/css" href="./colors.css" />
    <div class='kwmmode'></div>
  """

style: """
  -webkit-font-smoothing: antialiased
  left: 10px
  top: 5px
  width:850px
  cursor: pointer;
"""

update: (output, domEl) ->

  values = output.split('@')

  file = ""
  screenhtml = ""
  mode = values[0].replace /^\s+|\s+$/g, ""
  total = parseInt(values[1])
  active = parseInt(values[2])

  #apply a proper number tag so that space change controls can be added

  for i in [1..total]
    if i == active
      screenhtml += "<span class='icon screen#{i}'>&nbsp&nbsp</span>"
    else
      screenhtml += "<span class='ricon white screen#{i}'>&nbsp&nbsp</span>"

  #display the html string
  $(domEl).find('.kwmmode').html("<span class='tilingMode icon'></span>" +
                                 "<span class='tilingMode white'>[#{mode}] " +
                                 "<span class='cyan'> ⎢ </span></span>" +
                                 screenhtml)

  # add screen changing controls to the screen icons
  # $(".screen1").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 18 using control down'"
  # $(".screen2").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 19 using control down'"
  # $(".screen3").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 20 using control down'"
  # $(".screen4").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 21 using control down'"


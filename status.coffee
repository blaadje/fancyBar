command: "sh chunkbar.widget/scripts/status.sh"

refreshFrequency: 10000 # ms

render: (output) ->
  """
    <link rel="stylesheet" type="text/css" href="chunkbar.widget/style.css" />
    <link rel="stylesheet" type="text/css" href="chunkbar.widget/colors.css" />
    <div class="compstatus"></div>
  """

style: """
  right: 30px;
  top: 4px;
  """
timeAndDate: (date, time) ->
  # returns a formatted html string with the date and time
  return "
  <div class='status white'>
   <span class='ricon'> </span>
   <span>#{date}</span>
   <span class='white'> ⎢</span>
   <span class='ricon'></span>
   <span>#{time}</span>
  </div>"

batteryStatus: (battery, state) ->
  #returns a formatted html string current battery percentage, a representative icon and adds a lighting bolt if the
  # battery is plugged in and charging
  batnum = parseInt(battery)
  if state == 'AC' and batnum >= 90
    return "<span class='charging battery sicon'> </span><span class='green icon'></span><span class='white'> #{batnum}%</span>"
  else if state == 'AC' and batnum >= 75 and batnum < 90
    return "<span class='charging battery icon'> </span><span class='green icon'></span><span class='white'> #{batnum}%</span>"
  else if state == 'AC' and batnum < 75 and batnum >= 50
    return "<span class='charging battery icon'> </span><span class='yellow icon'></span><span class='white'> #{batnum}%</span>"
  else if state == 'AC' and batnum < 50 and batnum >= 15
    return "<span class='charging battery icon'> </span><span class='orange icon'></span><span class='white'> #{batnum}%</span>"
  else if state == 'AC' and batnum < 15
    return "<span class='charging battery icon'> </span><span class='red icon'></span><span class='white'> #{batnum}%</span>"
  else if batnum >= 90
    return "<span class='green icon'>&nbsp</span><span class='white'> #{batnum}%</span>"
  else if batnum >= 75 and batnum < 90
    return "<span class='green icon'>&nbsp</span><span class='white'> #{batnum}%</span>"
  else if batnum >= 50 and batnum < 75
    return "<span class='yellow icon'>&nbsp</span><span class='white'> #{batnum}%</span>"
  else if batnum < 50 and batnum >= 15
    return "<span class='orange icon'>&nbsp</span><span class='white'> #{batnum}%</span>"
  else if batnum < 15
    return "<span class='red icon'>&nbsp</span><span class='white'> #{batnum}%</span>"

getWifiStatus: (status, netName, netIP) ->
  if status == "Wi-Fi"
    return "<span class='wifi '>&nbsp&nbsp&nbsp</span><span class='white'>#{netName}&nbsp</span>"
  if status == 'USB 10/100/1000 LAN' or status == 'Apple USB Ethernet Adapter'
    return "<span class='wifi '>&nbsp&nbsp&nbsp</span><span class='white'>#{netIP}</span>"
  else
    return "<span class='grey wifi'>&nbsp&nbsp&nbsp</span><span class='white'>--&nbsp&nbsp&nbsp</span>"

update: (output, domEl) ->

  # split the output of the script
  values = output.split('@')

  time = values[0].replace /^\s+|\s+$/g, ""
  date = values[1]
  battery = values[2]
  isCharging = values[3]
  netStatus = values[4].replace /^\s+|\s+$/g, ""
  netName = values[5]
  netIP = values[6]
  # reminders = values[7].replace /^\s+|\s+$/g, ""

  # create an HTML string to be displayed by the widget
  htmlString = 
    @batteryStatus(battery, isCharging) + "<span class='cyan'>" + " ⎢ " + "</span>" +@timeAndDate(date,time) + "<span class ='cyan'></span>"

  $(domEl).find('.compstatus').html(htmlString)

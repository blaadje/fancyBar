#!/usr/bin/bash

WORKSPACE=fancybar.widget

echo $(sh $WORKSPACE/scripts/time_script)@ \
     $(sh $WORKSPACE/scripts/date_script)@ \
     $(sh $WORKSPACE/scripts/battery_percentage_script)%@ \
     $(sh $WORKSPACE/scripts/battery_charging_script)@ \
     $(sh $WORKSPACE/scripts/wifi_status_script)@ \
     $(sh $WORKSPACE/scripts/reminders.sh) \


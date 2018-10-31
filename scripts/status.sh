#!/usr/bin/bash

echo $(sh chunkbar.widget/scripts/time_script)@$(sh chunkbar.widget/scripts/date_script)@$(sh chunkbar.widget/scripts/battery_percentage_script)%@$(sh chunkbar.widget/scripts/battery_charging_script)@$(sh chunkbar.widget/scripts/wifi_status_script)@$(sh chunkbar.widget/scripts/reminders.sh)


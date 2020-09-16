# Timezone-Bot
A simple Discord bot made for keeping track of timezones
> Author: Angel Bot<br>
> Version: Beta 1.1

# Setting Up
## Requirements
To use this bot, you will need [A Discord Bot](https://discord.com/developers/applications), and [Node.js](https://nodejs.org/), an open-source, cross-platform JavaScript runtime that is utilized by Timezone Bot. The latest version should work fine, but if you run into any issues, I recommend you try [Node.js Version 12.16.2](https://nodejs.org/download/release/v12.16.2/) instead.
## Updating the Dependencies
##### Windows
Run the [update-dependencies.cmd](https://github.com/AngelDTF/Timezone-Bot/blob/beta/update-dependencies.cmd) file, and it should update the dependencies automatically. If you run into issues using the bot, you can try to run [force-compatibility.cmd](https://github.com/AngelDTF/Timezone-Bot/blob/beta/force-compatibility.cmd) to install the recommended version of the dependencies.
##### OSX/Linux
Run the [update-dependencies.sh](https://github.com/AngelDTF/Timezone-Bot/blob/beta/update-dependencies.sh) file in a terminal window, and it should update the dependencies automatically. If you run into issues using the bot, you can try to run [force-compatibility.sh](https://github.com/AngelDTF/Timezone-Bot/blob/beta/force-compatibility.sh) to install the recommended version of the dependencies.
## Setting Up the Configuration
You can view our quick guide for setting up the config file at [config-example.md](https://github.com/AngelDTF/Timezone-Bot/blob/beta/config-example.md).

# Using the Bot
##### Windows
Run the [exec.cmd](https://github.com/AngelDTF/Timezone-Bot/blob/beta/exec.cmd) file to open the bot. If you have followed every step correctly, then the bot should be running without any problems, and should be printing some information to the console window.
##### OSX/Linux
Run the [exec.sh](https://github.com/AngelDTF/Timezone-Bot/blob/beta/exec.sh) file to open the bot. If you have followed every step correctly, then the bot should be running without any problems, and should be printing some information to the terminal window.

# List of Commands
Here is a small list of commands the admins have access to: <br>
Notes: 
  * To use them, mention the bot, then type the command (e.g. @Timezone Bot help)
  * Only the admins specified in the config file have access to these
  * All commands (except <ins>help</ins>) will delete the response shortly after usage

##### help
> Prints the help message
##### refresh
> Refreshes the configuration cache
##### is dst
> Prints if daylights savings is active.s
# Introduction
The configuration file to the Timezone Bot is vital for it to work. In this document, I will show you how to create a configuration file for Timezone Bot. To start, I'll show you an example file I made and explain all the key/values in it, then you should be able to make your own configuration file.
# Example
```
{
    "token":"jqLrwp74VDLwrtPApzXm7vnZ.MBFJ9gSPAZZmeGG9-ADL75pAu23s4XqwaX",
    "channelId":"813013327874733235",
    "admins":
    {
	"1":"767946013008649915",
	"2":"398494733709899254"
    },
    "timezones":
    {
        "1":
        {
            "userId":"721157608948604525",
            "fallbackName":"Example User#1234",
            "offset":0,
            "daylightSavings":true,
            "format":"EST"
	},
        "2":
        {
            "userId":"475666227059283079",
            "fallbackName":"Example User 2#5678",
            "offset":-1,
            "daylightSavings":false,
            "format":"CST"
	}
    }
}
```
# Explanation
Okay, you may or may not understand what you just read up there, depending on how experienced you are with coding. If you're very experienced, you'll know how to continue setting up your bot just from that example alone, and nothing else. Here's the explanation: (Please read the text fully, and read through it twice if you're having any problems)
##### token
The token of the Discord Bot is entered here. The value `jqLrwp74VDLwrtPApzXm7vnZ.MBFJ9gSPAZZmeGG9-ADL75pAu23s4XqwaX` is an example and not an actual valid token. Replace this with your token.
##### channelId
This is where you would enter the channel that the bot would type the timezone information in. Replace `813013327874733235` with the ID of your text channel. If you do not know how to get the ID of your text channel, follow these steps: <br>
In Discord, go to `User Settings > Appearance > Advanced` and turn on `Developer Mode`. Exit the settings, then right click on your text channel of choice, and select `Copy ID`.
##### admins
Admins are optional. They are the only ones that can access the bot's commands. If you don't want any admins, then leave it as follows (don't delete it): `"admins":{}` <br>
Adding admins are easy. Add a key in it, and name the key the number admin it is (e.g. if you had 4 admins already, you would name the key `"5"`). Now, set the value to the User's ID. You can get the User ID the same way you do when setting the channelId. <br>
It should look like the following: `"1":"767946013008649915"` (obviously replacing 1 with the number you're on and replacing the value with your ID) <br>
If you are adding a new admin after the first, add a comma to the end of the first, and follow the above steps again. It should look like the following:
```
"1":"767946013008649915",
"2":"398494733709899254"
```
Tip: if there are more than 1 admins, every line except for the last will have a comma after it. This is how JSON works.
##### timezones
This is the list of timezones this bot will print out in Discord. There must be a minimum of 1 timezone for the bot to work. <br>
To add a timezone, like admins you need to enter the key value as the number timezone it is. So if it is the first timezone, write `"1"`. <br>
After the key, add a colon, and create 3 new lines. Add an open curly brace to the 1st line, and add a closed curly brace to the last to create an object (this is done so Timezone Bot can easily parse the JSON file). The result should look like this:
```
"1":
{

}
```
Inside the object, you'll need to create 5 keys with different value types (these are the value types: string = "any text inside quotations", int = 01234, bool = true/false): <br>
`userId (string)`, `fallbackName (string)`, `offset (int)`, `daylightSavings (bool)`, and `format (string)`. So far you should have the following:
```
"1":
{
	"userId":"",
	"fallbackName":"",
	"offset":0,
	"daylightSavings":false,
	"format":""
}
```
Now you have to fill out the information for the user.
* userId
  * Enter the User's ID here.
  * This is required to get some of the user's information.
* fallbackName
  * Enter a fallback name for the User here.
  * This is a failsafe just in case the bot cannot get this user's name and tag.
* offset
  * Enter the amount of hours this user is ahead/behind you.
  * This will correctly calculate this user's current time.
  * Examples: 6 if the user is 6 hours ahead of you, 0 if the user has the same time as you, -3 if the user is 3 hours behind you, etc.
* daylightSavings
  * Enter `true` or `false` if this user uses daylight savings or not
  * Required to correctly calculate the time in daylight savings
* format
  * Enter the user's timezone abbreviation here.
  * Display only, meant to show people what timezone the user is in.
  * Examples: `"EST"`, `"CST"`, `"GMT"`, etc.
  
After you filled out the user info, you should have something similar to this:
```
"1":
{
	"userId":"721157608948604525",
	"fallbackName":"Example User#1234",
	"offset":0,
	"daylightSavings":true,
	"format":"EST"
}
```
If you'd like to add more, similarly to the admins, just add a comma after the closing curly brace, and follow the above steps again.

# Conclusion
That should be all you need to know about setting up Timezone Bot. If you have any issues, please check over the Example and make sure you haven't messed up anywhere, and follow the entire guide again very carefully. <br>
If problems persist after that, then open an Issue on the repository and include your entire configuration file (except the token) in the comment.

//////////////////
// Timezone Bot //
// Version b1.1 //
//////////////////

require('./dst.js');

const Discord = require('discord.js');
const client = new Discord.Client();

var config = require('./config.json');
var timezones = config.timezones;
var response = false;
var admins = [];
var usernames = {};

GetAdmins();

client.on('ready', async () =>
{
    BotLog('Ready');
    client.user.setActivity('the time', {'type':'WATCHING'});
    await GetNames();
    client.channels.fetch(config.channelId).then((channel) => { channel.send(GetTimezones()); });
    setTimeout(() => { setInterval(GetNames, 30000); }, 30000);
});

client.on('message', (msg) =>
{
    if (msg.id == client.user.lastMessageID)
    {
        if (response)
        {
            response = false;
            return;
        }
        setInterval(() =>
        {
            msg.edit(GetTimezones());
            BotLog('Updated time');
        }, 60000);
    }
    else if (msg.author.id != client.user.id && admins.includes(msg.author.id))
    {
        var prefix = '<@!' + client.user.id + '> ';
        if (msg.content == prefix + 'help')
        {
            response = true;
            msg.channel.send('__help__\n> Prints the help message\n\n__refresh__\n> Refreshes the configuration cache\n\n__is dst__\n> Prints if daylight savings is active.\n\n*Note: All commands (except for __help__) will auto-delete the response after 5 seconds.*');
        }
        else if (msg.content == prefix + 'refresh')
        {
            delete require.cache[require.resolve('./config.json')];
            config = require('./config.json');
            timezones = config.timezones;
            response = true;
            msg.channel.send('Refreshed configuration cache').then((msg2) =>
            {
                setTimeout(() => {msg.delete(); msg2.delete();}, 5000);
            });
            BotLog('Refresh configuration cache');
        }
        else if (msg.content == prefix + 'is dst')
        {
            var date = new Date;
            var text;
            if (date.isDstObserved())
                text = 'Yep, daylight savings is in action';
            else
                text = 'Nope, daylight savings is not in action';
            response = true;
            msg.channel.send(text).then((msg2) =>
            {
                setTimeout(() => {msg.delete(); msg2.delete();}, 5000);
            });
            BotLog('Printed DST check with result \'' + date.isDstObserved() + '\'');
        }
    }
});

function GetTimezones()
{
    var date = new Date;
    var hour = date.getHours();
    var text = '';
    var minutes = date.getMinutes();
    if (minutes < 10)
        minutes = '0' + minutes;
    
    var userhour;
    var usersuffix;
    var username;
    var useroffset;
    
    for (var i = 1; i <= Object.keys(timezones).length; i++)
    {
        useroffset = timezones[i].offset;
        if (!timezones[i].daylightSavings && date.isDstObserved())
            useroffset -= 1;
        userhour = AddToHour(hour, useroffset);
        usersuffix = 'AM';
        if (userhour > 11 && userhour < 24)
            usersuffix = 'PM';
        if (userhour > 12)
            userhour -= 12;
        username = usernames[i];
        if (username == undefined)
        {
            username = timezones[i].fallbackName;
            BotLog('User ID for timezone ' + i + ' is invalid. Using fallback \'' + username + '\'');
        }
        text = text + '__**' + username + '**__\n> Time: `' + userhour + ':' + minutes + ' ' + usersuffix + '`\n> Format: `' + timezones[i].format + '`\n\n';
    }
    return text;
}

function AddToHour(originalValue, value)
{
    if (value == 0)
        return originalValue;
    var negative = false;
    if (value < 0)
    {
        negative = true;
        value = value * -1;
    }
    var newValue = originalValue;
    for (var i = 1; i <= value; i++)
    {
        if (negative)
        {
            newValue -= 1;
            if (newValue < 1)
                newValue += 24;
        }
        else
        {
            newValue += 1;
            if (newValue > 24)
                newValue -= 24;
        }
    }
    return newValue;
}

function GetAdmins()
{
    admins = [];
    for (var i = 1; i <= Object.keys(config.admins).length; i++)
    {
        admins.push(config.admins[i]);
    }
}

async function GetNames()
{
    usernames = {};
    for (var i = 1; i <= Object.keys(timezones).length; i++)
    {
        var fullname;
        await client.users.fetch(timezones[i].userId).then((user) =>{ fullname = user.tag; }).catch(() => { fullname = -1; });
        if (fullname == -1)
            continue;
        usernames[i] = fullname;
    }
}

function BotLog(text)
{
    var date = new Date;
    var minutes = date.getMinutes();
    if (minutes < 10)
        minutes = '0' + minutes;
    var time = date.getHours() + ':' + minutes;
    console.log('[' + client.user.username + "/" + time + "] " + text);
}

client.login(config.token);
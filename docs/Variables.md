In the custom commands of Mee6 you have the functionality to use variables.
These can be used by typing them in the custom command inside a `{ }`

# the `{user}` variables:

`{user}` or `{user.mention}` mentions the user.

`{user.id}` gives the id of a user.

`{user.name}` gives the user name (without @ or # or discriminator), this is the global username and not the server nickname.

`{user.discriminator}` gives the user discriminator (the 4 numbers after the # after your name).

`{user.roles}` gives all the roles of that user in that server (every @ is removed to prevent mentioning everyone or a role).

`{user.joined_at}` gives the date and time that the user joined the Server.

`{user.created_at}` date and time when the user account was created.

`{user.status}` gives the status (online, afk, dnd, offline) of the user.

`{user.isbot}` gives true if this is a bot account, false if it is a normal user account.
Mee6 custom commands don't react to bots, so this will currently always responds false.

`{user.pictureURL}` gives the link to the user avatar.

`{user.nickname}` gives the nickname of the user or the username if no nickname is set.

# the `{server}` variables

`{server}` or `{server.name}` gives the server name.

`{server.emojis}` gives the list of custom server emojis _(beta)_.

`{server.region}` gives the server region.

`{server.afk.timeout}` gives the timeout of the voicechat in minutes.

`{server.afk.channel}` gives the channel you will be send to after the timeout.

`{server.id}` the id of the server.

`{server.icon}` gives the link to the server icon.

`{server.owner}` gives the name of the server owner without mentioning him.

`{server.membercount}` gives the amount of members in your server.

`{server.created_at}` gives the date and time the server got created.

`{server.channels.default}` gives the default channel.

`{server.verification_level}` gives the verification_level of the server.

# the `{channel}` variables

`{channel}` or `{channel.mention}` will give the clickable channel name

`{channel.name}` gives the name of the channel, without the # in front

`{channel.id}` gives the id of the channel.

`{channel.topic}` gives the channel topic.

`{channel.position}` gives the position of the channel in the list (1 being the top of the list, this can reveal hidden channels).

`{channel.created_at}` gives the date and time that the channel was created.

In the custom commands of MEE6 you have the functionality to use variables.
These can be used by typing them in the custom command inside a `{ }`

# The `{user}` variables:

`{user}` or `{user.mention}` Mentions the user who executed the command.

`{user.id}` Gives the id of the user who executed thd command.

`{user.name}` Gives the user name (without `@` or `#` or `discriminator`), this is the global username and not the server nickname.

`{user.discriminator}` Gives the user discriminator (the 4 numbers after the `#` after your name).

`{user.idname}` Gives the username with the discriminator like: `MEE6#4876`.

`{user.avatar}` Gives the avatar hash.

`{user.avatar_url}` Gives the URL of your avatar.

`{user.bot}` Gives true if this is a bot account, false if it is a normal user account.
MEE6 custom commands don't react to bots, so this will currently always responds false.

`{user.picture}` Gives the link to the user avatar.

`{user.nickname}` Gives the nickname of the user or the username if no nickname is set.

# The `{server}` variables

`{server}` or `{server.name}` Gives the name of the server.

`{server.id}` Gives the id of the server.

`{server.icon}` Gives the server icon hash.

`{server.icon_url}` Gives the URL of the server icon.

`{server.owner_id}` Gives the id of the owner of the server.

`{server.owner}` Mentions the owner.

`{server.region}` Gives the region where the server is hosted.

`{server.verification_level}` Gives the level of verification of the server.

`{server.joined_at}` Gives the date of creation of the server.

`{server.member_count}` Gives the number of members in the server.

# The `{channel}` variables

`{channel}` or `{channel.name}` Gives the name of the channel.

`{channel.id}` Guves the id of the channel where the command is executed.

`{channel.type}` Gives true if this is a NSFW channel, false if it is a normal channel.

`channel.mention}` Mentions the channel where the commands is executed.

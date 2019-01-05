# Custom command variables

In the custom commands of MEE6 you have the functionality to use variables.
These can be used by typing them in the custom command inside the `{ }`

## The `{user}` variables

`user` variable is always reffered to user which executed the command

variable | description | example
-|-|-
`{user} {user.mention}` | user mention | `@MEE6`
`{user.id}` | user id | `159985870458322944`
`{user.name}` | user name | `MEE6`
`{user.discriminator}` | user discriminator | `4876`
`{user.idname}` | user tag | `MEE6#4876`
`{user.avatar_url}` | user avatar url | `https://cdn.discordapp.com/avatars/136777781005647872/a03cda55b8b9f1b36b6220f7e34e4de0.png?size=1024`

## The `{server}` variables

`server` variable is always reffered to server where the command was executed

variable | description | example
-|-|-
`{server} {server.name}` | server name | `MEE6 Support`
`{server.id}` | server id | `159962941502783488`
`{server.icon_url}` | server icon url | `https://cdn.discordapp.com/icons/159962941502783488/736c44dc0f5edf4115c0a23e1dbc5d1b.webp?size=1024`
`{server.owner_id}` | server owner id | `138362511190786048`
`{server.owner}` | server owner mention | `@Anis`
`{server.region}` | server region | `eu-west`
`{server.member_count}` | server member count | `82036`

## The `{channel}` variables

`channel` variable is always reffered to channel where the command was executed

variable | description | example
-|-|-
`{channel}` | channel mention | `#channel`
`{channel.name}` | channel name | `channel`
`{channel.id}` | channel id | `531047198964711424`

## Miscellaneous

Other variables that don't have real use but still can be used if you're doing something fancy

variable | description | example
-|-|-
`{user.avatar}` | user avatar hash | `a03cda55b8b9f1b36b6220f7e34e4de0`
`{user.bot}` | True - user is a bot, False - user is not a bot | `False`
`{server.icon}` | server icon hash | `736c44dc0f5edf4115c0a23e1dbc5d1b`
`{server.verification_level}` | server verification level: 0 - none, 1 - low, 2 - medium, 3 - high, 4 - tableflip | `2`
`{server.joined_at}` | date when bot joined server | `2017-04-08T07:24:15.143000+00:00`
`{channel.type}` | 0 - text, 1 - dm, 2 - voice channel, 3 - group dm, 4 - category | `0`

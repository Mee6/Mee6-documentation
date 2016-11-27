# mee6calc.xyz _(For [mee6.xyz](https://mee6.xyz)-powered servers)_
![screenshot](http://i.imgur.com/nHu5NZF.png)
Calculate how many more messages you need to send (for every minute) in order to reach a specific level!

### Usage
0. Send `!rank` in a server where a Mee6 bot is present.
0. Get your TOTAL XP (example output: ` LEVEL 14 | XP 766/1780 | TOTAL XP 10811 | Rank 21/1089`)
0. Go to [mee6calc.xyz](http://mee6calc.xyz)
  1. Enter the level you want to reach
  1. Enter your total XP
  1. Press _Calculate_
0. Evaluate information you have received.

### But how does it work...?
The leveling system follows a pattern, which can be explained with this mathematical function: ![function](http://i.imgur.com/GX5ae4A.jpg), where `x` is the level desired, and `f(x)` is the XP required for specified level. Subtract your current XP from the required XP, and what is left is how much more is needed until that level is reached. Since every message (per minute) gives [between 15 and 25 XP](https://github.com/cookkkie/mee6/blob/5da379573c06eddec8ffad455c5b10681da429c3/chat-bot/plugins/levels.py#L173), it is averaged to about 20 XP per message.

##### Disclaimer
I am not part of the [mee6.xyz](https://mee6.xyz) development team. This project is entirely made for fun.

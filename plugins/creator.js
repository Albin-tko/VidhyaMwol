const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😸VIDHYAMWOL 😸═════╗*\n           \n*⚜═Vidhya═⚜*\n\n*owner Albin-manoj - http://Wa.me/+919946134325*\n* *\n🔰instagram:-*            *\n*╚═════🔥🔥🔥🔥═════╝*\n\n*▷Creator: Albin-manoj*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═VidhyaMwol Owner Albin-manoj═💥*\n\n*💘 https://github.com/Albin-manoj/VidhyaMwol*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtube.com/channel/UC6R5kg3D4oqfemzWCAlGKPQ*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😸VIDHYAMWOL😸═════╗*\n           \n*⚜═Vidhya═⚜*\n\n*owner Albin-manoj - http://Wa.me/+919946134325*\n* *\n🔰Youtube: https://youtube.com/channel/UC6R5kg3D4oqfemzWCAlGKPQ*            *\n*╚══════🔥🔥🔥🔥═════╝*\n\n*▷Creator: Albin-manoj*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═VidhyaMwol Owner Albin-manoj═💥*\n\n*💘:https://github.com/Albin-manoj/VidhyaMwol*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtube.com/channel/UC6R5kg3D4oqfemzWCAlGKPQ*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }


const Discord = require('discord.js');
const client = new Discord.Client();

const channel = '493482927649193994';
const pepole = ['282350776456839169','346629187504832513','333683114461102090'];
const prefix = {
    acc1: '1',
    acc2: '2',
    acc3: '3',
    acc4: '4',
    acc5: '5',
    acc6: '6',
    acc7: '7',
    acc8: '8',
    acc9: '9',
    acc10: '10',
    acc11: '11',
    acc12: '12',
    acc13: '13',
    acc14: '14',
    acc15: '15',
    acc16: '16',
    acc17: '17',
    acc18: '18',
    acc19: '19',
    acc20: '20'
};

const acc1 = new Discord.Client();
acc1.on('ready', () => {
    console.log('Account 1 Ready!');
    setInterval(() => {
        acc1.guilds.find(g => g.id == '493482927649193994').channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc1.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc1.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc1 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc1.login(process.env.ACC1_TOKEN);



const acc2 = new Discord.Client();
acc2.on('ready', () => {
    console.log('Account 2 Ready!');
    setInterval(() => {
        acc2.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc2.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc2.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc2 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc2.login(process.env.ACC2_TOKEN);



const acc3 = new Discord.Client();
acc3.on('ready', () => {
    console.log('Account 3 Ready!');
    setInterval(() => {
        acc3.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc3.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc3.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc3 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc3.login(process.env.ACC3_TOKEN);



const acc4 = new Discord.Client();
acc4.on('ready', () => {
    console.log('Account 4 Ready!');
    setInterval(() => {
        acc4.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc4.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc4.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc4 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc4.login(process.env.ACC4_TOKEN);



const acc5 = new Discord.Client();
acc5.on('ready', () => {
    console.log('Account 5 Ready!');
    setInterval(() => {
        acc1.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc5.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc5.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc5 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc5.login(process.env.ACC5_TOKEN);



const acc6 = new Discord.Client();
acc6.on('ready', () => {
    console.log('Account 6 Ready!');
    setInterval(() => {
        acc6.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc6.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc6.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc6 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc6.login(process.env.ACC6_TOKEN);



const acc7 = new Discord.Client();
acc7.on('ready', () => {
    console.log('Account 7 Ready!');
    setInterval(() => {
        acc7.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc7.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc7.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc7 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc7.login(process.env.ACC7_TOKEN);



const acc8 = new Discord.Client();
acc8.on('ready', () => {
    console.log('Account 8 Ready!');
    setInterval(() => {
        acc1.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc8.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc8.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc8 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc8.login(process.env.ACC8_TOKEN);



const acc9 = new Discord.Client();
acc9.on('ready', () => {
    console.log('Account 9 Ready!');
    setInterval(() => {
        acc9.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc9.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc9.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc9 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc9.login(process.env.ACC9_TOKEN);



const acc10 = new Discord.Client();
acc10.on('ready', () => {
    console.log('Account 10 Ready!');
    setInterval(() => {
        acc10.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc10.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc10.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc10 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc10.login(process.env.ACC10_TOKEN);



const acc11 = new Discord.Client();
acc11.on('ready', () => {
    console.log('Account 11 Ready!');
    setInterval(() => {
        acc11.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc11.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc11.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc11 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc11.login(process.env.ACC11_TOKEN);



const acc12 = new Discord.Client();
acc12.on('ready', () => {
    console.log('Account 12 Ready!');
    setInterval(spam => {
        acc12.guilds.find(g => g.id == '493482927649193994').channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc12.guilds.find(g => g.id == '493482927649193994').channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc12.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc12 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc12.login(process.env.ACC12_TOKEN);



const acc13 = new Discord.Client();
acc13.on('ready', () => {
    console.log('Account 13 Ready!');
    setInterval(() => {
        acc13.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc13.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc13.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc13 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc13.login(process.env.ACC13_TOKEN);



const acc14 = new Discord.Client();
acc14.on('ready', () => {
    console.log('Account 14 Ready!');
    setInterval(() => {
        acc14.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc14.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc14.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc14 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc14.login(process.env.ACC14_TOKEN);



const acc15 = new Discord.Client();
acc15.on('ready', () => {
    console.log('Account 15 Ready!');
    setInterval(() => {
        acc15.channels.find(c => c.id == channel).send('**Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream, Dream**');
    }, 500);
    setInterval(() => {
       acc15.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc15.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc15 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc15.login(process.env.ACC15_TOKEN);

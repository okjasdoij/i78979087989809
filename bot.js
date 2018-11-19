const Discord = require('discord.js');
const client = new Discord.Client();

const channel = 493482927649193994;
const pepole = ['282350776456839169','346629187504832513','333683114461102090'];
const prefix = {
    acc1: '1',
    acc2: '2',
    acc3: '3',
    acc4: '4',
    acc5: '5'
};

const acc1 = new Discord.Client();
acc1.on('ready', () => {
    console.log('Account 1 Ready!');
    setInterval(() => {
       acc1.channels.get(channel).send('#daily');
    }, 86403000);
});
acc1.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc1 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc1.login(process.env.ACC1_TOKEN);



const acc2 = new Discord.Client();
acc2.on('ready', () => {
    console.log('Account 2 Ready!');
    setInterval(() => {
       acc2.channels.get(channel).send('#daily');
    }, 86403000);
});
acc2.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc2 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc2.login(process.env.ACC2_TOKEN);



const acc3 = new Discord.Client();
acc3.on('ready', () => {
    console.log('Account 3 Ready!');
    setInterval(() => {
       acc3.channels.get(channel).send('#daily');
    }, 86403000);
});
acc3.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc3 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc3.login(process.env.ACC3_TOKEN);



const acc4 = new Discord.Client();
acc4.on('ready', () => {
    console.log('Account 4 Ready!');
    setInterval(() => {
       acc4.channels.get(channel).send('#daily');
    }, 86403000);
});
acc4.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc4 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc4.login(process.env.ACC4_TOKEN);



const acc5 = new Discord.Client();
acc5.on('ready', () => {
    console.log('Account 5 Ready!');
    setInterval(() => {
       acc5.channels.get(channel).send('#daily');
    }, 86403000);
});
acc5.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc5 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc5.login(process.env.ACC5_TOKEN);

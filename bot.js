const Discord = require('discord.js');
const channel = '493482927649193994';
const pepole = ['282350776456839169','346629187504832513'];
const randomWords = ['Fuck Off ..','Dream, Dream ..','**Azoze** Is King ،، !','What you want?! ..','Dont Look at Me .!','Fuck You.','Hey Bitch!','Abode :v:','WHAT YOU NEED **BITCH**?! .','Hahahaha.. You are Funny.','Go out mother fuck!','Sleep With me \:('];
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
    acc10: '10'
};



const acc1 = new Discord.Client();
acc1.on('ready', () => {
    console.log('Account 1 Ready!');
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc1.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc2.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc3.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc4.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc5.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc6.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc7.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc8.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc9.channels.find(c => c.id == channel).send(random);
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
    const randomNumber = Math.floor(Math.random() * randomWords.length);
    const random = randomWords[randomNumber];
    setInterval(() => {
        acc10.channels.find(c => c.id == channel).send(random);
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

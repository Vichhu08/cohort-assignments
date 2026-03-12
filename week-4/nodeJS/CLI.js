const fs = require("fs");
const { Command } = require('commander');  // {} mean, from the commander lib, i just need command funtion.
const program = new Command();

program
    .name('counter')
    .description("CLI to do file based tasks")
    .version('0.8.0');

program.command('count_words')
    .description('count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) =>{
        fs.readFile(file, 'utf8', (err, data)=> { 
            if(err){
                console.error(err);
            }
            else {
                const words = data.trim().split(/\s+/).length ;
                console.log(words);
            }
        });
    });

program.command('count_letters')
    .description('count the number of letters in a file')
    .argument('<file>', 'file to count')
    .action((file) =>{
        fs.readFile(file, 'utf8', (err, data)=> { 
            if(err){
                console.error(err);
            }
            else {
                const letetrs = data.length ;
                console.log(letetrs);
            }
        });
    });

program.command('count_lines')
    .description('count the number of lines in a file')
    .argument('<file>', 'file to count')             // <> mean User MUST provide a file name.
    .action((file) =>{                               //'<file>' so here file is an argument name.
        fs.readFile(file, 'utf8', (err, data)=> { 
            if(err){
                console.error(err);
            }
            else {
                const lines = data.split('\n').length;
                console.log(lines);
            }
        });
    });



program.parse();


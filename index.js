const Discord = require('discord.js');
const bot = new Discord.Client();
var hi = 0;
var bye = 0;
var findmat = 0;
bot.login("NTMzOTk3NjQ3ODA4MTY3OTM2.Dxzisw.iuDhj7B6Cw18dvcODF9_C2WlWjA");
bot.on("ready", () => {
    process.env.fortnite;
    console.log("Bot is ready!");
})

bot.on('message', (message) => {
    if(message.content == "!helplist"){
        console.log("Successfully completed command (Helplist)");
        message.reply("\n Bot Nyoko (Ниоко) 1.0.0v \n \n Список команд: \n !talk (сообщение) - говорить с ботом \n \n Внимание! База данных этого бота слишком мала для разговора :(( \n Посмотреть её можно в !baza (пароль)");
    }

    if(message.content == "!baza 059150"){
        console.log("Successfully completed command (Baza)");
        message.reply("Вы открыли базу данных Nyoko \n \n Привет Ку Хай Прив Привет! Привет. Здравствуй Здравствуй! Здравствуйте! Здравствуйте привет ку хай прив привет! привет. здравствуй здравствуй! здравствуйте! здравствуйте Как дела Как у тебя дела Как дела? Как у тебя дела? Чо как Чо как? Как поживаешь Как поживаешь? Ты как Ты как? как дела как у тебя дела как дела? как у тебя дела? чо как чо как? как поживаешь как поживаешь? ты как ты как? Хорошо Хорошо! Замечательно Замечательно! Лучше всех Лучше всех! Круто Круто! Чётко Чётко! хорошо хорошо! замечательно лучше всех лучше всех! круто круто! чётко чётко! Плохо Плохо! Ужасно! Ужасно! Хуже некуда Хуже некуда! плохо плохо! ужасно ужасно! хуже некуда хуже некуда! Пока До свидания Пока! Пока. До свидания! ББ Пока Ниоко Ниоко пока Ниоко, пока Прощай Прощай! Прощай. пока до свидания пока до свидания бб пока Ниоко ниоко пока Ниоко, пока прощай прощай! прощай.\n \n Ниоко будет реагировать на данные слова (фразы)");
    }

    if(message.content == "!talk Привет" || message.content == "!talk привет" 
    || message.content == "!talk Ку" || message.content == "!talk ку" 
    || message.content == "!talk Хай" || message.content == "!talk хай" 
    || message.content == "!talk Прив" || message.content == "!talk прив" 
    || message.content == "!talk Привет!" || message.content == "!talk привет!" 
    || message.content == "!talk Привет." || message.content == "!talk привет."
    || message.content == "!talk Здравствуй" || message.content == "!talk здравствуй"
    || message.content == "!talk Здравствуй!" || message.content == "!talk здравствуй!"
    || message.content == "!talk Здравствуйте!" || message.content == "!talk здравствуйте!"
    || message.content == "!talk Здравствуйте" || message.content == "!talk здравствуйте"){
        hi = Math.floor(Math.random() * 6) + 1;
        console.log("Successfully completed command (Hello <",hi,">)");
        if(hi == 1) {
            message.reply("Привет-привет! :)");
        }
        if(hi == 2) {
            message.reply("Привет. ^_^");
        }
        if(hi == 3) {
            message.reply("Здравствуй! :))");
        }
        if(hi == 4) {
            message.reply("И тебе привет. ^_^");
        }
        if(hi == 5) {
            message.reply("Ниоко здесь! Привет! :)");
        }
        if(hi == 6) {
            message.reply("Приветствую. :)");
        }
    }

    if(message.content == "!talk Как дела" || message.content == "!talk как дела" 
    || message.content == "!talk Как у тебя дела" || message.content == "!talk как у тебя дела" 
    || message.content == "!talk Как дела?" || message.content == "!talk как дела?" 
    || message.content == "!talk Как у тебя дела?" || message.content == "!talk как у тебя дела?" 
    || message.content == "!talk Чо как" || message.content == "!talk чо как" 
    || message.content == "!talk Чо как?" || message.content == "!talk чо как?"
    || message.content == "!talk Как поживаешь" || message.content == "!talk как поживаешь"
    || message.content == "!talk Как поживаешь?" || message.content == "!talk как поживаешь?"
    || message.content == "!talk Ты как" || message.content == "!talk ты как"
    || message.content == "!talk Ты как?" || message.content == "!talk ты как?"){
        console.log("Successfully completed command (Talk..)");
            message.reply("У меня всё отлично! А что насчёт тебя? :)");
    }

    if(message.content == "!talk Хорошо" || message.content == "!talk хорошо" 
    || message.content == "!talk Хорошо!" || message.content == "!talk хорошо!" 
    || message.content == "!talk Замечательно" || message.content == "!talk замечательно" 
    || message.content == "!talk Замечательно!" || message.content == "!talk замечательно!" 
    || message.content == "!talk Лучше всех" || message.content == "!talk лучше всех" 
    || message.content == "!talk Лучше всех!" || message.content == "!talk лучше всех!"
    || message.content == "!talk Круто" || message.content == "!talk круто"
    || message.content == "!talk Круто!" || message.content == "!talk круто!"
    || message.content == "!talk Чётко" || message.content == "!talk чётко"
    || message.content == "!talk Чётко!" || message.content == "!talk чётко!"){
        console.log("Successfully completed command (Talk..)");
            message.reply("Славно! ^_^");
    }

    if(message.content == "!talk Плохо" || message.content == "!talk плохо" 
    || message.content == "!talk Плохо!" || message.content == "!talk плохо!" 
    || message.content == "!talk Ужасно" || message.content == "!talk ужасно" 
    || message.content == "!talk Ужасно!" || message.content == "!talk ужасно!" 
    || message.content == "!talk Хуже некуда" || message.content == "!talk хуже некуда" 
    || message.content == "!talk Хуже некуда!" || message.content == "!talk хуже некуда!"){
        console.log("Successfully completed command (Talk..)");
            message.reply("Сочувствую.. :(");
            message.reply("Но не вешай нос! Всё обязательно наладится! ;)");
    }

    
        if(message.content == "!talk Пока" || message.content == "!talk пока" 
        || message.content == "!talk До свидания" || message.content == "!talk до свидания" 
        || message.content == "!talk Пока!" || message.content == "!talk пока!" 
        || message.content == "!talk Пока." || message.content == "!talk пока." 
        || message.content == "!talk До свидания!" || message.content == "!talk до свидания!" 
        || message.content == "!talk ББ" || message.content == "!talk бб"
        || message.content == "!talk Пока Ниоко" || message.content == "!talk пока Ниоко"
        || message.content == "!talk Ниоко пока" || message.content == "!talk ниоко пока"
        || message.content == "!talk Ниоко, пока" || message.content == "!talk Ниоко, пока"
        || message.content == "!talk Прощай" || message.content == "!talk прощай"
        || message.content == "!talk Прощай!" || message.content == "!talk прощай!"
        || message.content == "!talk Прощай." || message.content == "!talk прощай."){
            bye = Math.floor(Math.random() * 6) + 1;
            console.log("Successfully completed command (GoodBye <",bye,">)");
            if(bye == 1) {
                message.reply("Пока. :((");
            }
            if(bye == 2) {
                message.reply("До скорого! -_-");
            }
            if(bye == 3) {
                message.reply("Ещё увидемся! ^_^");
            }
            if(bye == 4) {
                message.reply("Удачи. :)");
            }
            if(bye == 5) {
                message.reply("Приятно было поговорить с тобой! :))");
            }
            if(bye == 6) {
                message.reply("Прощай.. :(");
            }
        }  
        
        if(message.content == "!findmat")
        {
            if(findmat == 0){
                findmat = 1;
                console.log("Successfully completed command (Findmat < True >)")
                message.reply("Режим нахождения матов и нецензурной лексики **включён**!!!")
            }
            else{
                findmat = 0;
                console.log("Successfully completed command (Findmat < False >)")
                message.reply("Режим нахождения матов и нецензурной лексики **выключён**!!!")
            }
        }
        if(findmat == 1){
        if(message.content.includes("Бля") || message.content.includes("бля") || message.content.includes("БЛЯ")
        || message.content.includes("Хуй") || message.content.includes("хуй") || message.content.includes("ХУЙ")
        || message.content.includes("Еба") || message.content.includes("еба") || message.content.includes("ЕБА")
        || message.content.includes("Ёба") || message.content.includes("ёба") || message.content.includes("ЁБА")
        || message.content.includes("Пидор") || message.content.includes("пидор") || message.content.includes("ПИДОР")
        || message.content.includes("Сук") || message.content.includes("сук") || message.content.includes("СУК")
        || message.content.includes("Пизд") || message.content.includes("пизд") || message.content.includes("ПИЗД"))
        {
            message.reply("**Мат обнаружен!!!** Голосование за мут открыто. Через минуту решится судьба пользователя. После набирания более 60% голосов 'ЗА' пользователь получает мут")
            .then(function (message) {
              message.react("👎")
              message.react("👍")
              message.pin()
              if(message.react)
              console.log("Mat is found!");
            }).catch(function() {
                
             });
        }
    }
});

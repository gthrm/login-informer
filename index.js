import { Telegraf } from "telegraf";
import { config } from "dotenv";
config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const chatId = process.env.CHAT_ID;
const serverName = process.env.SERVER_NAME;
const [ip, user] = process.argv.slice(2);

const message = `Login to ${serverName} by user: ${user} from IP: ${ip}, ${new Date()}`;

bot.telegram.sendMessage(chatId, message);

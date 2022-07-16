"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const node_fetch_1 = __importDefault(require("node-fetch"));
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('meme')
        .setDescription('Shows a random meme.'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield interaction.deferReply();
            const response = yield (0, node_fetch_1.default)('https://meme-api.herokuapp.com/gimme/1');
            const data = yield response.json();
            const imageUrl = data.memes[0].url;
            yield interaction.editReply({ files: [imageUrl] });
        });
    },
};

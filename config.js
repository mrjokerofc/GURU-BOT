import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['263719647303', '𝙼𝚛 𝙵𝚛𝚊𝚗𝚔 𝚡1 ', true],
  ['17792326872', '𝙼𝚛 𝙵𝚛𝚊𝚗𝚔 𝚡2', true], 
  [''] 
] //Number of owners

global.pairingNumber = "263716006937" //put your bot number here

global.mods = ['263719647303','17792326872'] 
global.prems = ['263719647303', '17792326872']
global.allowed = ['917605902011', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ＳＵＢＺＥＲＯ'
global.premium = 'true'
global.packname = '𝙼𝙰𝙳𝙴 𝙱𝚈 𝙼𝚁 𝙵𝚁𝙰𝙽𝙺' 
global.author = '𝙹𝚄𝚂𝚃 𝙰𝙳𝙳𝙲𝚃𝙾 𝚈𝙾𝚄𝚁 𝙵𝙰𝚅𝚂' 
global.menuvid = 'https://i.imgur.com/AjDzGgG.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/mrfrankofc\n' 
global.dygp = 'https://chat.whatsapp.com/BFfD1C0mTDDDfVdKPkxRAA'
global.fgsc = 'https://github.com/Mr Fr3nk/GURU-BOT' 
global.fgyt = 'https://youtube.com/@mrfrankx'
global.fgpyp = 'https://youtube.com/@mrfrankx'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ 𝙻𝙾𝙰𝙳𝙸𝙽𝙶...*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

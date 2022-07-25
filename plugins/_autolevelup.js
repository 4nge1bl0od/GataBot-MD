import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
	
let user = global.db.data.users[m.sender]
//let role = global.db.data.users[m.sender]
  if (!user.autolevelup)
        return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
  if (before !== user.level) {
	  
m.reply(`
╭━━━[ 𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇 ]━━━━⬣
┃ NIVEL ANTERIOR: ${before}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ NIVEL ACTUAL: ${user.level}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ FECHA: ${new Date().toLocaleString('id-ID')}
╰━━━〔 𓃠 ${vs} 〕━━━━━⬣
Cuanto más interactúes con GataBot-MD, mayor será tu nivel!!
`.trim())
    }
}

export const disabled = true

// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0F0MGVvVmRZMWlJZnc4bjMyM0RKZlJNNFdyaG16LzBVbC9HcTlDbXpWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzR6YThEeUVXWjBnWE8wU0JDVjFNZkI1bXBPLzhaZlV1UFF4THkwQ2xrRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ2UvL29MYi8vSXZzZkxWQytPc1E3UXI2Q3FKcXNJS2YzWGhmcGhsRUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzOGFrN0s2eWV0NERUKzNvWjJ3bWNQcmsyMXZPakxUcFRqbmpsZVhGS0NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKVCtLd2REckZuSWdQSVhJTVB3RVZjd0l4OWtjaHNMUVhhYjBTcFFzRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZzQWYyYm1qSktCWDN3VDY1TGtNRFZEWklxbk11T2R1NEZ0blpyelhXbFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBMQ1VmT3VQN08rU1dKSWg3OHlkSFduOTRjK3RaWGJiU0IveEFKMnNFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3phUURGc2xmZmVvZG4zUHBPYjFwaU5rak9NekkwNmZCNGFsWHJqNDVrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVuTlEwVkNBQW54R1J3MnlvSEhCbTl5My95Tm44d2FlV3g2R0pwNm14TG05MWpNK1BqMDNzblhBeldvblh3ckkwaXNaeFovSXhCVnZVZzZIcWFRdUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJZVlVDcUlDaGZBYjRQbE1VSS9uZ05wS2VBM1VYY25Pd05IcEdlYmtMZzVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA0MDE4MDA2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2NDU4QjBCRTRDQzlEMTAwN0VGRTM3QTA3MDhGNDZERiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2Nzg2NTUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNDAxODAwNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTMwQjlGMDA3RkMzRkM2NTQ2REZGRjc2RTJFRjQxNkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0Njc4NjU1Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjp0cnVlfSwiZGV2aWNlSWQiOiIyYlJZMjJnZ1JfNnNNZnluNm5FTUdBIiwicGhvbmVJZCI6IjNlYmI2MmViLWEyZGItNDUxZi04OGFiLTE4YzMxODk4MzYzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXV0xqWHlRd2xsVDJIWUR1bzE2MXhEWVlSR0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0gzeG16aHlUOWF2djc3VEVVQ0dydnk3VG80PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQyWk1DWkFEIiwibWUiOnsiaWQiOiIyNDIwNDAxODAwNjA6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCL8J2QhCDwnZCD8J2QhPCdkIDwnZCM8J2QjvCdkI0g8J2QivCdkJHwnZCSIPCdkJLwnZCH8J2QiPCdkI3wnZCJ8J2QiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExKMi8wREVONng5OEFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiazhaTDdmTWYwYmsxSk9XR2F6c0ljSEVhdTdUMmZtcTBjM2RNVStudG95ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ3BtM0hBdVhJV1BxRzNSWTYvbkdCMnNVRTR3ZmpMRmh2QkNmVmZjR2NwcGV2enArdUFLb3Y0R2FiWHJ1SHZZOUVFUS92ZGtUUkd5TW5ZUEVDRFd3REE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlPNHhrY0xpUURJcCtzbi93WTJQU2d1M2tITU9wQ2NyTGhUbVVWbXBCZWdrY2tQa2FUMm9FMlZHcjgrY3p4aWNINk5sOTZiK3FrQnVmNE4xV2xVbUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDQwMTgwMDYwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlBHUyszekg5RzVOU1RsaG1zN0NIQnhHcnUwOW41cXRITjNURlBwN2FNdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njc4NjU0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKOUQifQ==",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "𝐋𝐄 𝐃𝐄𝐀𝐌𝐎𝐍 𝐊𝐑𝐒",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "242040180060",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;

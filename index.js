#!/usr/bin/env node

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const urlBase = "http://www.bcv.org.ve/";

async function main() {
  try {
    const { data } = await axios.get(urlBase);
    const $ = cheerio.load(data);
    const dollar = $(
      "#dolar > div > div > div.col-sm-6.col-xs-6.centrado > strong"
    );

    console.log("Price of dollar", dollar);
  } catch (error) {
    console.log(error);
  }
}

main();

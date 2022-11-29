const blog = require("../models/blog.model.js")
//scrape data from site using axios and jsdom
const axios = require('axios');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const url = 'https://www.pickmylaundry.in/';

async function fetchData() {
    const data = await axios.get(url).then(response => {

        const dom = new JSDOM(response.data);

        const document = dom.window.document;
        const rawdata =  [];
        for(let i=1;i<=3;i++){

            const d = document.querySelector(`#whyUs > div > div > div:nth-child(1) > ul > li:nth-child(${i}) > div.pointText`);
            const title = d.querySelector("h6").textContent;
            const text = d.querySelector("p").textContent;
            rawdata.push({title,text});
            
        }
        for(let i=1;i<=3;i++){

            const d = document.querySelector(`#whyUs > div > div > div:nth-child(3) > ul > li:nth-child(${i}) > div.pointText`);
            const title = d.querySelector("h6").textContent;
            const text = d.querySelector("p").textContent;
            rawdata.push({title,text});
        }
        // res.json(rawdata)
        for(let i=0;i<=5;i++){

          let CityGuide = new blog({title: rawdata[i].title, text: rawdata[i].text})
          CityGuide.save();
        }
          
        return rawdata;

      }).catch(error => {

        console.log(error);

        return error;

      });

    return data;

}

exports.fetchData = fetchData;

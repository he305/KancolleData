import fecth from 'node-fetch'
import { request } from 'https';

export default {
        get2ch() {
            request("https://2ch.hk/vg/catalog.json", (err, res, body) => {
                if (err) console.log(err);
                console.log(err);
            })
                // .then((res) => {
                //     return res.json();
                // })
                // .then((catalog) => {
                //     let threads = catalog.threads;
                //     threads.forEach((element) => {
                //         console.log(element.date);
                //     });
                // })
        }
    
}

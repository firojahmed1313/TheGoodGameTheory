import axios from "axios";

export const httpGet = async (url) => {
    try {
        let res = await axios.get(url);
        return res;
    } catch (err) {
        return console.log(err);
    }
};


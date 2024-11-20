import fs from "node:fs";

import express from "express";
import { nanoid } from "nanoid";

const app = express();

app.use(express.json());

const isUrlValid = (url) => {
    try {
        new URL(url)
        return true;
    } catch (err) {
        return false;
    }
};

app.post("/shorten-url", (req, res) => {
    /**
     * How to shorten the URL?
     */

    try {
        // Validat url
        const isValid = isUrlValid(req.body.longUrl);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: "Please enter valid URL"
            });
        }
        // console.log(req.body.longUrl);
        const shortUrl = nanoid(10);

        const oldData = fs.readFileSync("urlmap.json", { encoding: "utf-8" }); // existing data of file
        const newData = JSON.parse(oldData);
        newData[0][shortUrl] = req.body.longUrl

        fs.writeFileSync("urlmap.json", JSON.stringify(newData));

        res.json({
            success: true,
            message: "URL Shortner API",
            result: `http://localhost:8080/${shortUrl}`
        })
    } catch (err) {

    }


});

app.get("/:shortUrl", (req, res) => {
    // console.log(req.params.shortUrl)
    const shortUrl = req.params.shortUrl;

    const urlMap = fs.readFileSync("urlmap.json", { encoding: "utf-8" });
    const urlsObject = JSON.parse(urlMap)[0];

    const longUrl = urlsObject[shortUrl];

    res.redirect(longUrl); // Redirecting the user
});

app.listen(8080, () => console.log("Server is up and running at port 8080"));
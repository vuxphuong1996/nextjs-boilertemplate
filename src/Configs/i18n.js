const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
    defaultLanguage: "vn",
    otherLanguages: ["en"],
    localeSubpaths: {
        en: "en",
    },
    localePath: path.resolve("./public/static/locales"),
    detection: {
        lookupCookie: "next-i18next",
        order: ["cookie", "querystring", "localStorage", "path", "subdomain"],
        caches: ["cookie"],
    },
});

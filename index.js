const [,,...files] = process.argv

const fs = require("fs");

const recovered = input => JSON.parse(
  fs.readFileSync(input, { encoding: "utf8", flag: "r" })
);

const convert = (obj) => ({
        name: "Pot" + obj.name,
        sym: String("Pot").replace(/ /,"").toUpperCase(),
        image: obj.image,
        metadata: {
                standard: "arc69",
                name: "Pot" + obj.name,
                description: obj.description,
                external_url: "nshell.algo.xyz",
                attributes: obj.attributes
        } 
})       

for(let i in files) {
        const input = files[i];
        console.log(JSON.stringify(convert(recovered(input))));
}       
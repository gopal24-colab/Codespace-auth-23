

import app from "./app";
const {PORT} = process.env;

app.listen(PORT,(err) => {
  if (err) console.log(`Error due to ${err}`);
  console.log(`Server started`);
});

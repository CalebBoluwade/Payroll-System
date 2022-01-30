const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./users_db.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "1234567890";
const expiresIn = "1h";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

server.post("/api/auth/register", (req, res) => {
  const { email, password } = res.body;
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Email & Password already exists";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users_db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    let data = JSON.parse(data.toString());

    let last_item_id = data.users[data.users.length - 1].id;

    data.userdb.push({
      id: last_item_id + 1,
      email: email,
      password: password,
    });
    let writeData = fs.writeFile(
      "./users_db.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
});

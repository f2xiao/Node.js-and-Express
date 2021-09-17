const http = require("http");
const url = require("url");
const querystring = require("querystring");
const User = require("./models/user");

require("./models/connect");
// server app
const app = http.createServer();

// add request events to the server app
app.on("request", async (req, res) => {
  const method = req.method; // GET or POST
  const { pathname, query } = url.parse(req.url, true); // like /add?id=1821821 /list?sajdh=hsajd
  console.log(
    "--------------------------------",
    method,
    pathname,
    url.parse(req.url)
  );
  if (method == "GET") {
    if (pathname == "/list") {
      let users = await User.find(); // promise object // [{name:May, age:18...},{}]
      let list = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>用户列表</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
      </head>
      <body>
          <div class="container">
              <h6>
                  <a href="/add" class="btn btn-primary">添加用户</a>
              </h6>
              <table class="table table-striped table-bordered">
                  <tr>
                      <td>用户名</td>
                      <td>年龄</td>
                      <td>爱好</td>
                      <td>邮箱</td>
                      <td>操作</td>
                  </tr>`;
      users.forEach((item) => {
        list += `<tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>
       `;
        item.hobbies.forEach((item) => {
          list += `<span>${item}</span>`;
        });

        list += ` </td>
          <td>${item.email}</td>
          <td>
              <a href="/delete?id=${item.id}" class="btn btn-danger btn-xs">删除</a>
              <a href="/modify?id=${item.id}" class="btn btn-success btn-xs">修改</a>
          </td>
      </tr>`;
      });

      list += `</table>
      </div>
  </body>
  </html>`;
      res.end(list);
    } else if (pathname == "/add") {
      let add = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>用户列表</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          />
        </head>
        <body>
          <div class="container">
            <h3>添加用户</h3>
            <form method="POST" action="/add">
              <div class="form-group">
                <label>用户名</label>
                <input name="name" type="text" class="form-control" placeholder="请填写用户名" />
              </div>
              <div class="form-group">
                <label>密码</label>
                <input name="password"
                  type="password"
                  class="form-control"
                  placeholder="请输入密码"
                />
              </div>
              <div class="form-group">
                <label>年龄</label>
                <input name="age" type="text" class="form-control" placeholder="请填写年龄" />
              </div>
              <div class="form-group">
                <label>邮箱</label>
                <input name="email" type="email" class="form-control" placeholder="请填写邮箱" />
              </div>
              <div class="form-group">
                <label>请选择爱好</label>
                <div>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="足球" name="hobbies" /> 足球
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="篮球" name="hobbies" /> 篮球
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="橄榄球" name="hobbies" /> 橄榄球
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="敲代码" name="hobbies" /> 敲代码
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="抽烟" name="hobbies" /> 抽烟
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="喝酒" name="hobbies" /> 喝酒
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="烫头" name="hobbies" /> 烫头
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">添加用户</button>
            </form>
          </div>
        </body>
      </html>
      `;
      res.end(add);
    } else if (pathname == "/modify") {
      //   console.log(query.id);
      let user = await User.findOne({ _id: query.id });
      let hobbies = [
        "足球",
        "篮球",
        "橄榄球",
        "敲代码",
        "抽烟",
        "喝酒",
        "烫头",
      ];
      //   console.log(user);
      let modify = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>用户列表</title>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
            />
          </head>
          <body>
            <div class="container">
              <h3>修改用户</h3>
              <form method="POST" action="/modify?id=${user._id}">
                <div class="form-group">
                  <label>用户名</label>
                  <input name="name" value="${user.name}" type="text" class="form-control" placeholder="请填写用户名" />
                </div>
                <div class="form-group">
                  <label>密码</label>
                  <input name="password" value="${user.password}"
                    type="password"
                    class="form-control"
                    placeholder="请输入密码"
                  />
                </div>
                <div class="form-group">
                  <label>年龄</label>
                  <input name="age" value="${user.age}" type="text" class="form-control" placeholder="请填写年龄" />
                </div>
                <div class="form-group">
                  <label>邮箱</label>
                  <input name="email" value="${user.email}" type="email" class="form-control" placeholder="请填写邮箱" />
                </div>
                <div class="form-group">
                  <label>请选择爱好</label>
                  <div> 
        `;
      hobbies.forEach((item) => {
        if (user.hobbies.includes(item)) {
          modify += ` <label class="checkbox-inline">
                <input type="checkbox" value="${item}" name="hobbies" checked /> ${item}
              </label>`;
        } else {
          modify += ` <label class="checkbox-inline">
            <input type="checkbox" value="${item}" name="hobbies" /> ${item}
          </label>`;
        }
      });
      modify += ` </div>
        </div>
        <button type="submit" class="btn btn-primary">修改用户</button>
      </form>
    </div>
  </body>
</html>`;
      res.end(modify);
    } else if (pathname == "/delete") {
      console.log(query.id);
      await User.findOneAndDelete({ _id: query.id });
      res.writeHead(301, {
        Location: "/list",
      });
      res.end();
    }
  } else if (method == "POST") {
    if (pathname == "/add") {
      let formData = "";
      req.on("data", (param) => {
        formData += param;
      });
      req.on("end", async () => {
        // formData looks like: name=May&password=123456&age=19&email=junexiao22%40live.com&hobbies=%E7%AF%AE%E7%90%83&hobbies=%E6%95%B2%E4%BB%A3%E7%A0%81 (querystring.parse() to convert to string obejct)
        // let params;
        /* params looks like: 
                URLSearchParams {
                    'name' => 'May',
                    'password' => '',
                    'age' => '19',
                    'email' => 'junexiao22@live.com',
                    'hobbies' => '篮球',
                    'hobbies' => '敲代码' }
                it's an object */
        /* params = new URLSearchParams(formData); // returns an iterator
        const parsedParams = Object.fromEntries(params); // converts an iterator to an object
        console.log(parsedParams); */
        // const user = querystring.parse(formData);
        // console.log(user);
        // await User.create(parsedParams);
        let user = querystring.parse(formData);
        await User.create(user);
        res.writeHead(301, {
          Location: "/list",
        });
        res.end();
      });
    } else if (pathname == "/modify") {
      let formData = "";
      req.on("data", (param) => {
        formData += param;
      });
      req.on("end", async () => {
        const updateField = querystring.parse(formData);
        await User.updateOne({ _id: query.id }, updateField);
        res.writeHead(301, {
          Location: "/list",
        });
        res.end();
      });
    }
  }
});
// open request services listening
app.listen(3000);
console.log("server is running at port 3000");

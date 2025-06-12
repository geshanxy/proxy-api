export default async function handler(req, res) {
  try {
    const response = await fetch("https://talk.laomchiyu.com:8092/config");
    const data = await response.text(); // 或 .json() 视你接口返回内容决定
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("代理请求失败: " + error.message);
  }
}

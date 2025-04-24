export default async function handler(req, res) {
  const r = await fetch("https://apis.tianapi.com/jieqilist/index?key=c652bd1f2d34516b23d1e55e9cd98634");
  const data = await r.json();
  res.status(200).json(data);
}
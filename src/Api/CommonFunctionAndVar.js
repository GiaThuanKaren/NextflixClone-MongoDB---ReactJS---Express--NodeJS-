export function SetViewRecently(movietiem) {
  let Store = JSON.parse(localStorage.getItem("recent"));
  let res = Store.find(function (item, dix) {
    console.log(item, movietiem);
    return item.id == movietiem.id;
  });
  console.log("View Recent Checking Adding", Store, movietiem, res);

  if (res == null) {
    if (Store.length < 10) Store.unshift(movietiem);
    else Store.pop();
  }
  let itemLocal = JSON.stringify(Store);
  let user=JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:81/backend/Api/Customer.php?recent&user=${user}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(Store),
  });
  localStorage.setItem("recent", itemLocal);
}

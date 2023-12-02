function loginHandler() {
  console.log('2')

  if (txtUsername.value === "" || txtUsername.value === null) {
    lblNotify.innerText = "Bạn chưa nhập tên người dùng !";
    txtUsername.focus();
    return false;
  }

  if (txtPassword.value === "" || txtPassword.value === null) {
    lblNotify.innerText = "Bạn chưa nhập mật khẩu!";
    txtPassword.focus();
    return false;
  }

  if (txtUsername.value === "huynhnhan03" && txtPassword.value === "123456789") {
    lblNotify.innerHTML = `<span>
      Chào bạn <strong> ${txtUsername.value}</strong>
      </span>`;
    return true;
  } else {
    lblNotify.innerText = "Thông tin không đúng";
    txtUsername.select();
    return false;
  }
}

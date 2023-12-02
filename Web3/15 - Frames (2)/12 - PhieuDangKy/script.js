function submitForm() {
    var selectElement = document.getElementById("products");
    var selectedOptions = [];
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].selected) {
        selectedOptions.push(selectElement.options[i].text);
      }
    }
    let products = "";
    if (selectedOptions.length > 0) {
      products = selectedOptions.join(", ");
    } else {
      products = "Không có sản phẩm nào được chọn";
    }
    alert(
      "Họ tên: " +
        document.getElementById("fullname").value +
        "\n" +
        "Địa chỉ: " +
        document.getElementById("address").value +
        "\n" +
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Điện thoại: " +
        document.getElementById("phone").value +
        "\n" +
        "Giới tính: " +
        (document.getElementById("male").checked ? "Nam" : "Nữ") +
        "\n" +
        "Nghề nghiệp: " +
        document.getElementById("occupation").value +
        "\n" +
        "Sản phẩm: " +
        products +
        "\n" +
        "Dự đoán số người tham gia: " +
        document.getElementById("participants").value
    );
  }
  function clearForm() {
    document.getElementById("registration-form").reset();
  }
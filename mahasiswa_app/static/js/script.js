$(document).ready(function () {
  if ($("#result")[0] != null) {
    Read();
  }
  $("#create").click(function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var contact = $("#contact").val();

    if (name == "" || email == "" || contact == "") {
      alert("Please Complete the required field");
    } else {
      $.ajax({
        url: "create",
        type: "POST",
        data: {
          name: name,
          email: email,
          contact: contact,
          csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function () {
          Read();
          $("#name").val("");
          $("#email").val("");
          $("#contact").val("");
          alert("Data berhasil ditambahkan");
        },
      });
    }
  });

  $(document).on("click", ".edit", function () {
    var Id = $(this).attr("name");
    window.location = "edit/" + Id;
  });

  $("#update").click(function (e) {
    var Name = $("#name").val();
    var Email = $("#email").val();
    var Contact = $("#contact").val();

    if (Name == "" || Email == "" || Contact == "") {
      alert("Please complete the required field");
    } else {
      var Id = $("#mahasiswa_id").val();
      $.ajax({
        type: "POST",
        url: "update/" + Id,
        data: {
          name: Name,
          email: Email,
          contact: Contact,
          csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function (response) {
          window.location = "/";
          alert("Updated !");
        },
      });
    }
  });

  $(document).on("click", ".delete", function () {
    var Id = $(this).attr("name");
    $.ajax({
      type: "POST",
      url: "delete/" + Id,
      data: {
        csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
      },
      success: function (response) {
        Read();
        alert("Deleted");
      },
    });
  });
});

function Read() {
  $.ajax({
    url: "read",
    type: "POST",
    async: false,
    data: {
      res: 1,
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    },
    success: function (response) {
      $("#result").html(response);
    },
  });
}

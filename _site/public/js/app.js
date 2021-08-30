
    // (function () {

      var push_to_firebase = function (data) {
        alert("谢谢您的反馈。Thanks for sending your feedback.")
        //alert(site.data.translations['feedbackAlert'][document.getElementById("lang").value])

        // var db = firebase.firestore();

        db.collection("messages").add({
          name: data["name"],
          email: data["email"],
          message: data["msg"],
          timestamp: Date.now()
        })
          .then(function (docRef) {
            console.log("Message sent, ID: ", docRef.id);
            location.reload();
          })
          .catch(function (error) {
            console.error("Message could not be sent: ", error);
          });
      }

      var contact_submit = function () {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var msg = document.getElementById("message");

        var data = {
          "name": name.value,
          "email": email.value,
          "msg": msg.value
        }

        push_to_firebase(data);
        
      }

      document.getElementById("submit_msg").addEventListener("click", contact_submit);

    //})();

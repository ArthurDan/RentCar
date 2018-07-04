
deleteMember(id){
    var data = {
        id: id
    }
    fetch("/users/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        if(data === "success"){
           this.setState({msg: "User has been deleted."});  
        }
    }).catch(function(err) {
        console.log(err)
    });
}